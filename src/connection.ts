import { Kafka, logLevel } from "kafkajs";

export const client = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID || "Iris",
  logLevel: Number(process.env.KAFKA_LOG_LEVEL) || logLevel.NOTHING,
  brokers: [process.env.KAFKA_HOST || "0.0.0.0:9092"],
  retry: {
    initialRetryTime: Number(process.env.KAFKA_INITIAL_RETRY_TIME) || 300,
    retries: Number(process.env.KAFKA_RETRIES) || 5
  }
});
