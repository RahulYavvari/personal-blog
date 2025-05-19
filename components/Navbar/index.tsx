"use client";
import React, { useEffect, useState } from 'react';

type Time = {
    hours: string;
    minutes: string;
    ampm: string;
}

const DigitalClock = () => {
  const [time, setTime] = useState<Time>({hours: "", minutes: "", ampm: ""});

  useEffect(() => {
    const getCurrentTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12 || 12;

      return {
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        ampm
      };
    };

    setTime(getCurrentTime());
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return (
    <span className='font-mono bg-[#ffffff] rounded-3xl shadow-2xl text-black px-4 py-1 font-bold'>
      {"00"}:{"00"} {"AM"}
    </span>
  );

  return (
    <span className='font-mono bg-[#ffffff] rounded-3xl shadow-2xl text-black px-4 py-1 font-bold'>
      {time.hours}:{time.minutes} {time.ampm}
    </span>
  );
};

const Navbar = () => {
    return (
        <nav className="hidden md:block fixed bg-[#121212cf] w-[100%] h-[70px] border-b-1 border-[#3a3a3a] top-[0%] left-[50%] transform translate-x-[-50%] mt-0 backdrop-blur-lg z-50">
            <div className="flex items-center h-full justify-center gap-[4rem]">
                <span className='homemade-apple--font text-2xl font-bold'>RY</span>
                <a href="#about-me" className="hover:bg-[#ffffffdc] cursor-pointer px-4 py-1 hover:text-black rounded-3xl transition-all duration-200">About</a>
                <a href="#skills" className="hover:bg-[#ffffffdc] cursor-pointer px-4 py-1 hover:text-black rounded-3xl transition-all duration-200">Skills</a>
                {/* <a className="hover:bg-[#ffffffdc] cursor-pointer px-4 py-1 hover:text-black rounded-3xl transition-all duration-200">Experience</a> */}
                <a href="#projects" className="hover:bg-[#ffffffdc] cursor-pointer px-4 py-1 hover:text-black rounded-3xl transition-all duration-200">Projects</a>
                <a href="#contact-me" className="hover:bg-[#ffffffdc] cursor-pointer px-4 py-1 hover:text-black rounded-3xl transition-all duration-200">Contact</a>
                <DigitalClock/>
            </div>
        </nav>
    );
}

export default Navbar;