const BASE_URL = import.meta.env.VITE_BASE_URL;

export const sendRequest = async (
  limit: number,
  intervalIndex: number,
  index: number
) => {
  try {
    const response = await fetch(
      `${BASE_URL}?limit=${limit}&interval=${intervalIndex}&index=${index}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const { message } = await response.json();
    console.log("Response received:", message);
    return message;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
