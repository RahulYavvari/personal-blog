"use client";
import { useState } from "react";

const AboutMe = () => {
  const [minimized, setMinimized] = useState(true);

  return (
    <section className="mx-[1.5rem] my-[2rem] md:mx-[10rem] md:my-[8rem] scroll-mt-[80px] md:scroll-mt-[120px]" id="about-me">
      <div className="flex flex-col gap-[3rem]">
        <div id="terminal-ui">
          <div className="relative bg-[#9a9a9a] p-[5px] rounded-xl">
            <div className="bg-[#111111] p-6 md:p-10 rounded-xl">
              <div className="absolute top-5 right-5 flex gap-1">
                <div
                  onClick={() => setMinimized((prev) => !prev)}
                  className={`rounded-full w-3 h-3 bg-[#00CA4E] cursor-pointer transform transition-transform duration-300 ${
                    minimized ? "rotate-90" : "rotate-0"
                  }`}
                ></div>
                <div className="rounded-full w-3 h-3 bg-[#FFBD44]"></div>
                <div className="rounded-full w-3 h-3 bg-[#FF605C]"></div>
              </div>

              <h1 className="dela-gothic--font text-[2rem]">About Me</h1>
              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  minimized ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-md pt-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, error corrupti a neque eos quis expedita! Assumenda, quam tempore iure rem corrupti officia, ipsam facilis est minus doloremque perferendis commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, error corrupti a neque eos quis expedita! Assumenda, quam tempore iure rem corrupti officia, ipsam facilis est minus doloremque perferendis commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-md pt-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, magnam quas facere ipsa totam aliquid assumenda temporibus ratione ad obcaecati veritatis laboriosam quam nobis vel dolor beatae! Beatae, dicta excepturi.
                </p>

                <div className="pt-10 flex gap-3 flex-wrap">
                  <button className="rounded-full border border-blue-600 px-3 py-1 bg-blue-800">
                    Resume
                  </button>
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
