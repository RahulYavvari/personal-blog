"use client";
import { useState } from "react";

const AboutMe = () => {
  const [minimized, setMinimized] = useState(true);

  return (
    <section className="mx-[1.5rem] my-[2rem] md:mx-[10rem] md:my-[8rem] scroll-mt-[50px] md:scroll-mt-[120px]" id="about-me">
      <div className="flex flex-col gap-[3rem]">
        <div id="terminal-ui">
          <div className="relative bg-[#9a9a9a] p-[5px] rounded-xl">
            <div className="bg-[#111111] p-6 md:p-10 rounded-xl">
              <div className="absolute top-5 right-5 flex gap-1">
                <div
                  onClick={() => setMinimized((prev) => !prev)}
                  className={`rounded-full w-3 h-3 bg-[#00CA4E] cursor-pointer transform transition-transform duration-300 ${minimized ? "rotate-90" : "rotate-0"
                    }`}
                ></div>
                <div className="rounded-full w-3 h-3 bg-[#FFBD44]"></div>
                <div className="rounded-full w-3 h-3 bg-[#FF605C]"></div>
              </div>

              <h1 className="dela-gothic--font text-[2rem]">About Me</h1>
              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${minimized ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-[0.9rem] md:text-md pt-10">
                  I'm someone who enjoys building things that work well and feel simple to use. I’m especially drawn to distributed systems—how everything fits together behind the scenes—and also to UI, where small details can make a big difference. I like working on projects that are useful, clear, and don’t try too hard to be clever.

                  Outside of work, I’m usually listening to music or messing around on my guitar—nothing fancy, just a few chords and whatever sounds good. I like learning how things work, staying curious, and keeping things clean—whether that’s code, design, or just how I approach problems in general.
                </p>
                <p className="text-[0.9rem] md:text-md pt-4">
                  At the end of the day, I try to keep things straightforward. I enjoy working with people who care about what they’re building and aren’t afraid to dig into the details. I don’t overhype things, but I take pride in doing solid work that holds up over time. Whether it’s a backend service or a small UI tweak, I want the things I build to make sense—to me, to users, and to whoever reads the code next.

                </p>

                <div className="pt-10 flex gap-3 flex-wrap">
                  <a href="https://drive.google.com/file/d/1d2zfZH_r6P04HtOcGhID-76ggIpjIx4Q/edit" target="_blank" className="rounded-full border border-blue-600 px-3 py-1 bg-blue-800">
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
