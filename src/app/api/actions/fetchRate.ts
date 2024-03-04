export async function fetchRate(
  baseCurrency: string,
  year: number,
  month: number,
  day: number
) {
  const url = `https://v6.exchangerate-api.com/v6/f7f76e28d6eee79f65a85963/history/${baseCurrency}/${year}/${month}/${day}`;

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
