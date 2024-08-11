import { limitedRequests } from ".";
import { TOTAL_REQUESTS } from "../constants";

export const sendAllRequests = async (
  limit: number,
  onRequestComplete: (result: string) => void
): Promise<void> => {
  let sentRequests = 0;
  let intervalIndex = 0;
  let totalResults: string[] = [];

  return new Promise<void>((resolve, reject) => {
    const intervalId = setInterval(async () => {
      intervalIndex += 1;
      try {
        const remainingRequests = TOTAL_REQUESTS - sentRequests;
        const currentBatchSize = Math.min(limit, remainingRequests);

        console.log(`Sending ${currentBatchSize} requests...`);
        const results = await limitedRequests(currentBatchSize, intervalIndex);

        totalResults = [...totalResults, ...results];

        results.forEach((result: string) => {
          onRequestComplete(result);
        });

        sentRequests += currentBatchSize;

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
