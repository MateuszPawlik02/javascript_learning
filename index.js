async function znajdzMiasto(nazwaMiasta) {
  try {
    const getTown = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${nazwaMiasta}`,
    );
    const getTownData = await getTown.json();
    const { latitude, longitude } = getTownData.results[0];
    const getWeather = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    );
    const weather = await getWeather.json();
    const { temperature, windspeed } = weather.current_weather;
    console.log(
      `Pogoda w ${nazwaMiasta}: ${temperature}°C, wiatr: ${windspeed} km/h`,
    );
  } catch (blad) {
    console.log("Błąd:", blad);
  }
}

znajdzMiasto("Opoczno");
