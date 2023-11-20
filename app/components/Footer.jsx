import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" w-full h-12 bottom-0 left-0 bg-[#1d1e25] absolute flex items-center justify-center">
      <div className="text-gray-200 text-sm text-center hover:text-gray-400">
        <Link href="https://openweathermap.org/api" target="_blank">
          Powered by OpenWeatherMap API
        </Link>
      </div>
    </div>
  );
}

export default Footer;
