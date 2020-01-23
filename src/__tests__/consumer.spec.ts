import { Subscribe } from "..";

describe("Consumer", () => {
  const propertiesResponse = ["key", "message", "offset", "partition", "topic"];

  it("should receive data", async () => {
    const subscribe = Subscribe("test-consumer");
    const response = (await subscribe.receive("topic1")) as any[];

    expect(response.length).toBeGreaterThanOrEqual(1);
    expect(Object.keys(response[0])).toEqual(propertiesResponse);
  });

  it("should consumed all messages", async () => {
    const subscribe = Subscribe("test-consumer");
    const response = (await subscribe.receive("topic1")) as any[];

    expect(response.length).toEqual(0);
  });
});
