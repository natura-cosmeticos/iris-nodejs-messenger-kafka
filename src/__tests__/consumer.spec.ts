import { Subscribe } from "..";

describe("Consumer", () => {
  const subscribe = Subscribe("test-consumer");

  it("should receive data", async () => {
    const response = await subscribe.receive("topic1");
    expect(response).toBeDefined();
  });
});
