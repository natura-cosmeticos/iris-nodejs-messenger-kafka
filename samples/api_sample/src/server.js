import express from "express";
import cron from "node-cron";
import {
  Publish,
  Subscribe
} from "@naturacosmeticos/iris-nodejs-messenger-kafka";

import routes from "./routes";

const app = express();

const producer = Publish();
const consumer = Subscribe("purchase-record-consumer");

app.use((req, res, next) => {
  req.producer = producer;

  return next();
});

app.use(routes);

async function run() {
  cron.schedule("*/10 * * * * *", async () => {
    const response = await consumer.receive("purchase-record");
    console.log("Records -->", response, "\n");
  });

  app.listen(3333);
}

run().catch(console.error);
