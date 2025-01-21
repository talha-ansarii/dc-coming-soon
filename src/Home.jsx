"use client";

import { useState } from "react";
import EmailForm  from "./components/EmailForm";



export default function Home() {
    const [successMessage, setSuccessMessage] = useState("");
  return (
    <div className="relative flex h-screen flex-col overflow-x-hidden md:justify-center xl:min-h-screen xl:flex-row xl:justify-start">
      <img src="/signin/bg.svg" className="absolute z-10" />

      {/* Left Section */}
      <div className="relative z-20 flex w-full flex-col justify-between  xl:w-[55%]">
      <div className="min-h-screen flex flex-col justify-center ">
      <main className="flex-grow flex items-center">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-blue-600">Distance Connect</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Distance Connect Coming Soon
          </p>
          <p className="mt-1 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-1 md:text-xl md:max-w-3xl">
          "Placements ka solution"
          </p>
          
          <div className="mb-[-12px]">
            <EmailForm setSuccessMessage={setSuccessMessage} />
          </div>
          <p className=" mt-[-16px] max-w-md mx-auto text-base text-gray-500 sm:text-sm md:mt-5 md:text-md md:max-w-3xl">
          {successMessage ? <span className="text-green-500">{successMessage}</span> : "Enter your email address, and we will notify you once we go live."}
          </p>

        </div>
      </main>
      <footer className="py-2">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
           
            <a href="https://www.linkedin.com/company/distance-connnect/" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Linkedin</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
            </a>
            <a href="https://www.instagram.com/distanceconnect?igsh=dnV2ZDk5OXFscG1o" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
</svg>
            </a>
            <a href="https://youtube.com/@DistanceConnect?si=118TnBciDdcSi_zP" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Youtube</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
</svg>
            </a>
          </div>

        </div>
      </footer>
    </div>


      </div>

      {/* Right Section */}
      <div className="relative hidden items-center justify-center overflow-hidden bg-[#0A64BC] xl:flex xl:w-[45%]">
        <div className="absolute left-0 right-0 top-0 p-8">
          <div className="flex items-center gap-4">
            <img src="/support.svg" className="cursor-pointer" alt="Support" />
            <span className="text-lg font-medium text-[#F7FAFC]">Support</span>
          </div>
        </div>
        <img
          className="absolute right-0 top-[-50px]"
          alt="Decorative Image 1"
          src="/signin/image1.svg"
          width={400}
          height={400}
        />
        <img
          className="absolute bottom-[80px] right-[-70px] scale-x-[-1]"
          alt="Decorative Image 2"
          src="/signin/image3.png"
          width={350}
          height={350}
        />
        <div className="absolute right-[50px] top-[150px] text-right font-inter text-[24px] font-semibold leading-normal text-white">
          The largest community of
          <br /> Mentors and Startups
        </div>
      </div>
      <img
        className="absolute bottom-0 left-[48%] hidden scale-x-[-1] xl:block"
        alt="Decorative Image 3"
        src="/signin/image2.png"
        width={450}
        height={450}
      />
    </div>
  );
}
