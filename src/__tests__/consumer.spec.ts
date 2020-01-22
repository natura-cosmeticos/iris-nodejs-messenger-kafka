import { Subscribe } from "..";

describe("Consumer", () => {
  const subscribe = Subscribe("topic1", 0);

  afterAll(() => {
    subscribe.close();
  });

  it("should receive data", async () => {
    const message: any = await subscribe.receive();
    const propertiesMessage = [
      "topic",
      "value",
      "offset",
      "partition",
      "highWaterOffset",
      "key"
    ];

    expect(message).toBeDefined();
    expect(Object.keys(message)).toEqual(propertiesMessage);
  });
});
