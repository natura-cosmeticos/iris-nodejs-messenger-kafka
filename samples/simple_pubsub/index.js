require("dotenv").config();
const {
  Publish,
  Subscribe
} = require("@naturacosmeticos/iris-nodejs-messenger-kafka");

const publish = Publish();

const responsePublish = publish.send(
  "topic-sample",
  "Testing sample example publish kafka"
);
responsePublish
  .then(result => console.log("Publish -->", result, `\n\n`))
  .catch(console.error);

const subscribe = Subscribe("consumer-group-sample-test");
const responseSubscribe = subscribe.receive("topic-sample");
responseSubscribe
  .then(result => console.log("Subscribe -->", result))
  .catch(console.error);
