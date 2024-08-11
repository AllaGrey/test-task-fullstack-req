import { sendRequest } from ".";

export const limitedRequests = async (
  limit: number,
  intervalIndex: number,
  onResult: (result: string) => void
): Promise<void> => {
  const promises = Array.from({ length: limit }, (_, index) =>
    sendRequest(limit, intervalIndex, index + 1).then(onResult)
  );

  try {
    await Promise.all(promises);
  } catch (error) {
    console.error("Error during requests:", error);
    throw error;
  }
};
