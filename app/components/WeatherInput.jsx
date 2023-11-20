"use client";
import React, { useState } from "react";
import { getWeather } from "../data/weather";

export default function WeatherInput({ setData }) {
  const [input, setinput] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const weather = await getWeather(input);
    setData(weather);
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type city"
          className="w-full focus:outline-none focus:border-gray-800 border-1 font-medium p-3 text-xl rounded-md text-center"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button type="submit" className="w-full text-white text-xl border hover:bg-blue-400 border-blue-600 font-bold p-3 bg-blue-500 my-3 rounded-md">
          Search
        </button>
      </form>
    </div>
  );
}
