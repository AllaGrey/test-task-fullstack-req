import { limitedRequests } from ".";
import { TOTAL_REQUESTS } from "../constants";

export const sendAllRequests = async (
  limit: number,
  onRequestComplete: (result: string) => void
) => {
  let intervalIndex = 0;
  let sentRequests = 0;
  let totalResults: string[] = [];

  const intervalId = setInterval(async () => {
    intervalIndex += 1;
    console.log(intervalIndex, "Interval");
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
    }
  }, 1000);
};
