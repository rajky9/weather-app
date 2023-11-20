const API_KEY = process.env.API_KEY;
console.log(API_KEY);
export async function getWeather(city) {
  try {
    console.log(API_KEY);
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
