import { Publish, Subscribe } from "../..";
jest.unmock("kafkajs");

describe("Consumer Integration Tests", () => {
  beforeAll(async () => {
    const publish = Publish();
    await publish.send("topic1", "hello world");
  });

  it("should receive data", async () => {
    const propertiesResponse = [
      "key",
      "message",
      "offset",
      "partition",
      "topic"
    ];
    const subscribe = Subscribe("test-consumer");
    const response = (await subscribe.receive("topic1")) as any[];

    expect(response.length).toBeGreaterThanOrEqual(1);
    expect(Object.keys(response[0])).toEqual(propertiesResponse);
  });
});
