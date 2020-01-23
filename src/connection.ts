import { Kafka } from "kafkajs";

export const client = (clientId: string): Kafka => {
  return new Kafka({
    clientId,
    brokers: [process.env.KAFKA_HOST || "0.0.0.0:9092"]
  });
};
