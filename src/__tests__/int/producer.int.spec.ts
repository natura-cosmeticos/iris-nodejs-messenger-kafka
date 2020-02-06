import { Publish, Subscribe } from "../..";
jest.unmock("kafkajs");

describe("Producer Integration Tests", () => {
  afterAll(async () => {
    const subscribe = Subscribe("test-producer");
    await subscribe.receive("test.publisher.topic");
  });

  const publish = Publish();
  const propertiesResponse = [
    "topicName",
    "partition",
    "errorCode",
    "baseOffset",
    "logAppendTime",
    "logStartOffset"
  ];

  it("should send publish", async () => {
    const response = await publish.send("test.publisher.topic", "hello world");

    expect(response).toBeDefined();
    expect(Object.keys(response[0])).toEqual(propertiesResponse);
  });
});
