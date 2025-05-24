import Image from "next/image";
import wavySphere from "@/public/wavy-sphere.gif";

import Typewriter from "./Typewriter";

const Hero = () => {
    return (
        <section className="w-full h-[100vh] flex flex-col justify-center items-center gap-[10rem] px-[1rem] md:px-[10rem]" id="hero">
            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[150px] md:backdrop-blur-[250px] -z-10"></div>
            {/* <Image className="absolute h-[80%] md:h-[100vh] md:w-[100vw] top-[50%] left-[50%] tranform translate-x-[-50%] translate-y-[-50%] -z-20" src={wavySphere} priority alt="sphere animation for asthetics"/> */}
            <video
                className="absolute h-[80%] md:h-[100vh] md:w-[100vw] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] -z-20 object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/wavy-sphere.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="dela-gothic--font text-3xl md:text-5xl self-start">
                <h1 className="mb-2">Hello,</h1>
                <h1>I&apos;m <span className="text-[#986cff] " >Rahul Yavvari</span></h1>

                <h1 className="mt-10 courier-prime--font text-3xl md:text-4xl text-[#ffffff]">
                    <Typewriter texts={[" I am a developer.", " I love to code.", " I love design."]} speed={100} />
                </h1>
            </div>

            <a href="https://drive.google.com/file/d/1d2zfZH_r6P04HtOcGhID-76ggIpjIx4Q/edit" target="_blank" className="rounded-full border text-lg border-blue-600 px-3 py-1 bg-blue-800">
                Resume
            </a>
        </section>
    );
}

export default Hero;