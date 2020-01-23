import { client } from "./connection";

export const Subscribe = (groupId: string) => {
  const consumer = client.consumer({ groupId });
  const admin = client.admin();

  const receive = async (topic: string) => {
    const payload = {
      topic,
      fromBeginning: true
    };
    await consumer.connect();
    await consumer.subscribe(payload);

    const response = new Array();
    const topicOffset = await admin.fetchTopicOffsets(topic);
    const consumerGroupOffsets = await admin.fetchOffsets({ groupId, topic });
    admin.disconnect();

    if (topicOffset[0].offset === consumerGroupOffsets[0].offset) {
      consumer.disconnect();
      return response;
    }

    return new Promise(async resolve => {
      await consumer.run({
        autoCommitThreshold: 0,
        // tslint:disable-next-line: no-shadowed-variable
        eachMessage: async ({ topic, message, partition }) => {
          response.push({
            key: message.key.toString(),
            message: message.value.toString(),
            offset: message.offset,
            partition,
            topic
          });
        }
      });

      consumer.on("consumer.end_batch_process", () => {
        resolve(response);
      });
    }).finally(() => {
      consumer.disconnect();
    });
  };

  return {
    receive
  };
};
