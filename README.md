# @naturacosmeticos/iris-nodejs-messenger-kafka

[![Build Status](https://travis-ci.org/natura-cosmeticos/iris-nodejs-messenger-kafka.svg?branch=master)](https://travis-ci.org/natura-cosmeticos/iris-nodejs-messenger-kafka) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![NPM](https://img.shields.io/npm/l/@naturacosmeticos/api-linter)

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

To release local test, we use [Verdaccio](https://github.com/verdaccio/verdaccio):

> After installing Verdaccio, on a terminal/console, start `verdaccio` process.<br/>
> At another terminal/console, run the command `yarn release:local`. This will publish the packages locally (http://localhost:4873), which may include the dependency required for other projects, e.g.: `yarn add @naturacosmeticos/iris-nodejs-messenger-kafka --registry=http://localhost:4873`.

To make it easier, we use [Conduktor](https://www.conduktor.io/) dashboard desktop client to manage Kafka instances.
