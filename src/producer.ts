import { Producer, ProduceRequest, Offset } from "kafka-node";
import { client } from "./connection";

export const Publish = () => {
  const producer = new Producer(client);

  const create = () => {
    return new Promise(resolve => {
      producer.on("ready", (): void => {
        resolve(producer);
      });
    });
  };

  const createTopics = (topics: string[]) => {
    return new Promise((resolve, reject) => {
      producer.createTopics(topics, (err: any, data: any): void => {
        err ? reject(err) : resolve(data);
      });
    });
  };

  const send = (entity: ProduceRequest) => {
    const payload = [
      {
        topic: entity.topic,
        messages: entity.messages,
        partition: entity.partition
      }
    ];
    return new Promise((resolve, reject) => {
      producer.send(payload, (err: any, data: any): void => {
        err ? reject(err) : resolve(data);
      });
    });
  };

  const currentOffset = (topic: string) => {
    const offset = new Offset(client);

    return new Promise((resolve, reject) =>
      offset.fetchLatestOffsets([topic], (error, data) => {
        error ? reject(error) : resolve(data[topic]["0"]);
      })
    );
  };

  const close = () => {
    producer.close();
  };

  return {
    create,
    createTopics,
    send,
    currentOffset,
    close
  };
};
