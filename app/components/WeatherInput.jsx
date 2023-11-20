"use client"
import React, { useState } from "react";
import { getWeather } from "../data/weather";

export default function WeatherInput({setData}) {
  const [input, setinput] = useState("Lisková")
  const handleCity = async () => {
    const weather = await getWeather(input)
    setData(weather)
  }
  console.log(input)
  return (
    <div className="w-full">
      <input type="text" placeholder="type city" className="w-full focus:outline-none focus:border-gray-800 border-1 font-medium p-3 text-xl rounded-md text-center" value={input} onChange={e => setinput(e.target.value)} />
      <button className="w-full text-white text-xl border hover:bg-blue-400 border-blue-600 font-bold p-3 bg-blue-500 my-3 rounded-md" onClick={handleCity}>Search</button>
    </div>
  );
}
