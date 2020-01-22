import {
  Consumer,
  OffsetFetchRequest,
  ConsumerOptions,
  Message
} from "kafka-node";
import { client } from "./connection";

export const Subscribe = (topic: string, partition: number) => {
  const topics: OffsetFetchRequest[] = [{ topic, partition }];
  const options: ConsumerOptions = {
    autoCommit: false,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024 * 1024
  };

  const consumer = new Consumer(client, topics, options);

  const receive = () => {
    return new Promise(resolve => {
      client.refreshMetadata([topic], (): void => {
        consumer.on("message", (message: Message): void => {
          resolve(message);
        });
      });
    });
  };

  const close = () => {
    return new Promise(reject => {
      consumer.close((error: Error): void => {
        reject(error);
      });
    });
  };

  return {
    receive,
    close
  };
};
