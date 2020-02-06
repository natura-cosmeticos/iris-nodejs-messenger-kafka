const { Subscribe } = require("@naturacosmeticos/iris-nodejs-messenger-kafka");

/**
 * This example is for subscribers only
 * For exponential backoff on publishers, take a look at the retry library on npm
 * https://www.npmjs.com/package/retry
 */

const subscribe = Subscribe("consumer-group-sample-test", {
  retries: 5,
  factor: 1
});

const responseSubscribe = subscribe.receive("topic-sample");
responseSubscribe
  .then(result => console.log("Subscribe -->", result))
  .catch(err =>
    console.error({ retryCount: err.retryCount, retryTime: err.retryTime })
  );
