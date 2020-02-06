import { Publish, Subscribe } from "../..";
jest.unmock("kafkajs");

describe("Consumer Integration Tests", () => {
  const subscribe = Subscribe("test-consumer");

  beforeAll(async () => {
    const publish = Publish();
    await publish.send("test.consumer.topic", "hello world");
  });

  afterAll(async () => {
    await subscribe.receive("test.consumer.topic");
  });

  it("should receive data", async () => {
    const propertiesResponse = [
      "key",
      "message",
      "offset",
      "partition",
      "topic"
    ];
    const response = (await subscribe.receive("test.consumer.topic")) as any[];

    expect(response.length).toBeGreaterThanOrEqual(1);
    expect(Object.keys(response[0])).toEqual(propertiesResponse);
  });
});
