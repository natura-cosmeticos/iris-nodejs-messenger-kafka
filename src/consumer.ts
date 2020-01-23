import { client } from "./connection";

export const Subscribe = (groupId: string) => {
  const consumer = client("Consumer").consumer({ groupId });

  const receive = async (topic: string) => {
    const payload = {
      topic
    };

    await consumer.connect();
    await consumer.subscribe(payload);

    const response = new Array();
    // await consumer.run({
    //   eachMessage: async ({ message }) => {
    //     response.push(message.value.toString());
    //   }
    // });

    await consumer.disconnect();

    return response;
  };

  return {
    receive
  };
};
