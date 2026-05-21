import { Worker } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null,
});

const worker = new Worker(
  "song-upload",

  async (job) => {
    console.log(
      "🎵 Processing Song:",
      job.data
    );

    // Simulate heavy processing
    await new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );

    console.log(
      `✅ Finished processing: ${job.data.title}`
    );
  },

  { connection }
);

worker.on("completed", (job) => {
  console.log(
    `🚀 Job ${job.id} completed`
  );
});

worker.on("failed", (job, err) => {
  console.log(
    `❌ Job failed: ${err.message}`
  );
});