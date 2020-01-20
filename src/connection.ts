import { KafkaClient } from "kafka-node";

export const client = new KafkaClient({
  kafkaHost: process.env.KAFKA_HOST || "0.0.0.0:9092"
});
