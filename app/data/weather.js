const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
console.log("KEY:",API_KEY);
export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("chyba pri nacitani dat");
  }
  return null;
}
