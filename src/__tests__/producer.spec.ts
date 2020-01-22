import { Publish } from "..";

describe("Producer", () => {
  const publish = Publish();

  afterAll(() => {
    publish.close();
  });

  it("should send publish", async () => {
    const request = {
      topic: "topic1",
      messages: "hello world",
      partition: 0
    };

    await publish.create();
    await publish.createTopics([request.topic]);

    const expectedOffset: any = await publish.currentOffset(request.topic);

    await publish.send(request);

    const currentOffset: any = await publish.currentOffset(request.topic);
    const sentMessagesCount = currentOffset - expectedOffset;

    expect(sentMessagesCount).toBe(1);
  });
});
