import { Subscribe } from "../..";

describe("Consumer Unit Tests", () => {
  it("should consumed all messages", async () => {
    const subscribe = Subscribe("test-consumer");
    const response = (await subscribe.receive("topic1")) as any[];

    expect(response.length).toEqual(0);
  });
});
