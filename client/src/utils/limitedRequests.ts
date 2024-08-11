import { sendRequest } from ".";

export const limitedRequests = async (limit: number, intervalIndex: number) => {
  const promises = Array.from({ length: limit }, (_, index) =>
    sendRequest(limit, intervalIndex, index + 1)
  );

  try {
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error("Error during requests:", error);
    throw error;
  }
};
