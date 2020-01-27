import { Kafka, logLevel } from "kafkajs";

export const client = new Kafka({
  clientId: "Iris",
  logLevel: logLevel.WARN,
  brokers: [process.env.KAFKA_HOST || "0.0.0.0:9092"]
});
