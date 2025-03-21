import Image from "next/image";
import wavySphere from "@/public/wavy-sphere.gif";

import Typewriter from "./Typewriter";

const Hero = () => {
    return (
    <section className="w-full h-[100vh] flex flex-col justify-center items-center gap-[10rem] px-[1rem] md:px-[10rem]" id="hero">
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[150px] md:backdrop-blur-[250px] -z-10"></div>
        <Image className="absolute h-[80%] md:h-[100vh] md:w-[100vw] top-[50%] left-[50%] tranform translate-x-[-50%] translate-y-[-50%] -z-20" src={wavySphere} priority alt="sphere animation for asthetics"/>
        
        <div className="dela-gothic--font text-4xl md:text-5xl self-start">
            <h1 className="mb-2">Hello,</h1>
            <h1>I'm <span className="text-[#B08EFF] " >Rahul Yavvari</span></h1>

            <h1 className="mt-10 courier-prime--font text-3xl md:text-4xl text-[#ffffff]">
                <Typewriter texts={[" I am a developer.", " I love to code.", " I love design."]} speed={100} loop={true} />
            </h1>
        </div>

        <a href="#" className="rounded-full border border-blue-600 px-3 py-1 bg-blue-800">
            Resume
        </a>
    </section>
    );
}   

export default Hero;