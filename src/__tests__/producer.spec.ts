import { Publish } from "..";

describe("Producer", () => {
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
    const response = await publish.send("topic1", "hello world");

    expect(response).toBeDefined();
    expect(Object.keys(response[0])).toEqual(propertiesResponse);
  });
});
