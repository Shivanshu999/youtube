import { Queue } from "bullmq";

import { redis } from "./redis";

export const videoQueue = new Queue(
  "video-processing",
  {
    connection: redis,
    defaultJobOptions: {
      attempts: 3,

      removeOnComplete: 100,

      removeOnFail: 50,
    },
  }
);