# @naturacosmeticos/iris-nodejs-messenger-kafka

[![Build Status](https://travis-ci.org/natura-cosmeticos/iris-nodejs-messenger-kafka.svg?branch=master)](https://travis-ci.org/natura-cosmeticos/iris-nodejs-messenger-kafka)

Utilities to ease the communication with Apache Kafka

## Installation

```sh
# with npm
npm install --save @naturacosmeticos/iris-nodejs-messenger-kafka

# with yarn
yarn add @naturacosmeticos/iris-nodejs-messenger-kafka
```

## How to Use

Set the following environment variable beforehand

- `KAFKA_HOST` (host to specific kafka broker instance. Default: 0.0.0.0:9092)
- `KAFKA_CLIENT_ID` (an id to representing kafka instance. Default: Iris)
- `KAFKA_LOG_LEVEL` (log level of the log entry. Default: 0. Possible values: NOTHING=0, ERROR=1, WARN=2, INFO=4, DEBUG=5)
- `KAFKA_INITIAL_RETRY_TIME` (initial value used to calculate the retry in milliseconds. Default: 300)
- `KAFKA_RETRIES` (max number of retries per call. Default: 5)

To local docker test, following the commands on the root repository

```sh
docker-compose up -d
```
