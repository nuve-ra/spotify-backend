import { songQueue } from "./queues/songQueue.js";

await songQueue.add(
  "process-song",
  {
    title: "Test Song",
    uploadedAt: new Date(),
  }
);

console.log("✅ Test job added");