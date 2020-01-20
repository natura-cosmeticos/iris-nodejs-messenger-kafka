import { Publish } from "..";

describe("Producer", () => {
  it("should send publish", async () => {
    const request = {
      topic: "topic1",
      messages: "hello",
      partition: 0
    };

    const publish = Publish();
    await publish.create();
    await publish.createTopics([request.topic]);

    const expectedOffset: any = await publish.currentOffset(request.topic);

    await publish.send(request);

    const currentOffset: any = await publish.currentOffset(request.topic);
    const sentMessagesCount = currentOffset - expectedOffset;

    expect(sentMessagesCount).toBe(1);
  });
});
