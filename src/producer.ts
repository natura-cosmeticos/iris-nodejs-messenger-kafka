import { CompressionTypes } from "kafkajs";
import { v4 as uuid } from "uuid";
import { client } from "./connection";

export const Publish = () => {
  const producer = client("Producer").producer();

  const send = async (topic: string, value: any) => {
    const payload = {
      topic,
      compression: CompressionTypes.GZIP,
      messages: [{ key: uuid().toString(), value }]
    };
    await producer.connect();

    const response = await producer.send(payload);

    producer.disconnect();

    return response;
  };

  return {
    send
  };
};
