import Image from "next/image";
import sunset_animation from "@/public/sunset.gif";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="flex flex-col gap-[10rem]">
            <div className="flex flex-col justify-center items-center h-[410px]">
                <Image className="max-w-3xs relative bottom-8" draggable={false} priority src={sunset_animation} alt="sunset animation"/>
                <h1 className="homemade-apple--font text-4xl">Rahul Yavvari</h1>
            </div>
            <div className="border-t-1 text-[0.8rem] pt-5 border-[#6B6B6B] h-[4rem]">
                <p className="dela-gothic--font text-center text-[#9F9F9F]">Made by Rahul Yavvari &copy; {currentYear}</p>
            </div>
        </footer>
    );
};

export default Footer;