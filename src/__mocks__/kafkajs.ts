const kafkajs: any = jest.genMockFromModule("kafkajs");

kafkajs.Kafka = () => ({
  producer: () => ({
    connect: () => ({}),
    send: () => [
      {
        topicName: "test",
        partition: "0",
        errorCode: "",
        baseOffset: "1",
        logAppendTime: "",
        logStartOffset: ""
      }
    ],
    disconnect: () => ({})
  }),
  consumer: () => ({
    connect: () => ({}),
    subscribe: () => ({}),
    run: () => ({
      eachMessage: () => ({})
    }),
    on: () => ({}),
    disconnect: () => ({})
  }),
  admin: () => ({
    fetchOffsets: () => [{ offset: "0" }],
    fetchTopicOffsets: () => [{ offset: "0" }],
    disconnect: () => ({})
  })
});

module.exports = kafkajs;
