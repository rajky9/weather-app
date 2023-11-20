"use client";
import { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherInput from "./WeatherInput";
import bg from "@/public/background.jpg";
import Image from "next/image";
import Footer from "./Footer";

const Weather = () => {
  const [data, setData] = useState(null);
  return (
    <div className="w-full h-screen lex flex-col justify-center items-center">
      {/* BackGround */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Image src={bg} className="w-full h-full object-cover" />
        {/* OVERLAY*/}
        <div className="absolute top-0 left-0 w-full h-screen bg-black/30" />
      </div>
      <div className="w-full h-full p-4 m-auto max-w-[600px]">
        <h2 className="py-8 text-gray-100 lg:text-5xl lg:leading-[60px] leading-[45px] md:text-4xl text-3xl text-center">
          Check Weather In Your City
        </h2>
        <WeatherInput setData={setData} />
        <WeatherInfo data={data} />
        <Footer />
      </div>
    </div>
  );
};

export default Weather;
