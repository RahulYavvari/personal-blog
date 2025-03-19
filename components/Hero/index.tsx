import Image from "next/image";
import wavySphere from "@/public/wavy-sphere.gif";

const Hero = () => {
    return (
    <section className="w-full h-[100vh]" id="hero">
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[150px] md:backdrop-blur-[250px] -z-10"></div>
        <Image className="absolute h-[80%] md:h-[100vh] md:w-[100vw] top-[50%] left-[50%] tranform translate-x-[-50%] translate-y-[-50%] -z-20" src={wavySphere} priority alt="sphere animation for asthetics"/>
        
        <div>
            {/* <h1>Hello</h1> */}
        </div>

    </section>
    );
}   

export default Hero;