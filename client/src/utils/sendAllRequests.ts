import { limitedRequests } from ".";
import { TOTAL_REQUESTS } from "../constants";

export const sendAllRequests = async (
  limit: number,
  onRequestComplete: (result: string) => void
): Promise<void> => {
  let sentRequests = 0;
  let intervalIndex = 0;

  return new Promise<void>((resolve, reject) => {
    const intervalId = setInterval(async () => {
      try {
        intervalIndex += 1;

        const remainingRequests = TOTAL_REQUESTS - sentRequests;
        const currentBatchSize = Math.min(limit, remainingRequests);

        if (remainingRequests <= 0) {
          clearInterval(intervalId);
          console.log("All requests sent.");
          resolve();
          return;
        }

        console.log(
          `Sending ${currentBatchSize} requests in interval ${intervalIndex}...`
        );

        sentRequests += currentBatchSize;

        await limitedRequests(
          currentBatchSize,
          intervalIndex,
          onRequestComplete
        );

        if (sentRequests >= TOTAL_REQUESTS) {
          clearInterval(intervalId);
          console.log("All requests sent.");
          resolve();
        }
      } catch (error) {
        clearInterval(intervalId);
        reject(error);
      }
    }, 1000);
  });
};
