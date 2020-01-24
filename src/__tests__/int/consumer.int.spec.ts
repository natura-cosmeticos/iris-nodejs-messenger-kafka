import { Subscribe } from "../..";
jest.unmock("kafkajs");

describe("Consumer Integration Tests", () => {
  const propertiesResponse = ["key", "message", "offset", "partition", "topic"];

  it("should receive data", async () => {
    const subscribe = Subscribe("test-consumer");
    const response = (await subscribe.receive("topic1")) as any[];

    expect(response.length).toBeGreaterThanOrEqual(1);
    expect(Object.keys(response[0])).toEqual(propertiesResponse);
  });
});
