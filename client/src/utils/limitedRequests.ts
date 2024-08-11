import { sendRequest } from ".";

export const limitedRequests = async (limit: number, intervalIndex: number) => {
  // Створюємо масив промісів для запитів
  const promises = Array.from({ length: limit }, (_, index) =>
    sendRequest(limit, intervalIndex, index + 1)
  );

  try {
    // Виконуємо всі запити паралельно і чекаємо на їх завершення
    const results = await Promise.all(promises);
    console.log("Requests:", results);
    return results;
  } catch (error) {
    console.error("Error during requests:", error);
    throw error;
  }
};

// import { sendRequest } from ".";

// export const limitedRequests = async (limit: number): Promise<string[]> => {
//   const results: string[] = [];

//   for (let i = 0; i < limit; i++) {
//     try {
//       const result = await sendRequest(i + 1); // Відправка запиту та очікування на відповідь
//       results.push(result); // Додавання результату до масиву
//       console.log("Received result:", result);
//     } catch (error) {
//       console.error("Error during request:", error);
//       // Можна або продовжити цикл, або перервати його в разі помилки
//     }
//   }

//   console.log("All results:", results);
//   return results; // Повертаємо масив результатів після завершення всіх запитів
// };
