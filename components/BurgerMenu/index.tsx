import { useState } from "react";

const BurgerMenu = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleClick = () => {
        setIsBurgerOpen((prev) => !prev);
    }

    return (
        <>
            <div onClick={handleClick} className="md:hidden w-12 h-12 cursor-pointer shadow-xl border-2 border-[#000000] bg-white rounded-full fixed top-5 right-5 z-[100] flex items-center justify-center text-black">{!isBurgerOpen ? ">_" : "?"}</div>
            <div className={`text-white flex gap-3 flex-col p-5 border-1 border-[#505050] bg-[#121212] rounded-2xl top-10 right-10 transition-all duration-200 z-[99] ${isBurgerOpen ? "fixed opacity-100 w-[200px] h-[235px] scale-100" : " fixed opacity-0 w-[0px] h-[0px] scale-5 pointer-events-none"}`}>
                <a onClick={() => setIsBurgerOpen(false)} href="#about-me" className="w-full p-2 rounded-xl pl-5 bg-[#323232] shadow-xl">About</a>
                <a onClick={() => setIsBurgerOpen(false)} href="#skills" className="w-full p-2 rounded-xl pl-5 bg-[#323232] shadow-xl">Skills</a>
                <a onClick={() => setIsBurgerOpen(false)} href="#projects" className="w-full p-2 rounded-xl pl-5 bg-[#323232] shadow-xl">Projects</a>
                <a onClick={() => setIsBurgerOpen(false)} href="#contact-me" className="w-full p-2 rounded-xl pl-5 bg-[#323232] shadow-xl">Contact</a>
            </div>
        </>
    );
};

export default BurgerMenu;