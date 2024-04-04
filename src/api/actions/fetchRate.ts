"use server";

export async function fetchRate(
  baseCurrency: string,
  year: number,
  month: number,
  day: number
) {
  const url = `https://v6.exchangerate-api.com/v6/85fe65516f572d42332539c6/history/${baseCurrency}/${year}/${month}/${day}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch exchange rate data: ${error.message}`);
  }
}
