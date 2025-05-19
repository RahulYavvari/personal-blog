import Image from "next/image";


const ContactMe = () => {
    return (
        <section className="section-container scroll-mt-[100px]" id="contact-me">
            <div className="flex flex-col gap-[3rem]">
                <h1 className="dela-gothic--font text-[2rem]">Contact Me</h1>
                <div className="self-center flex flex-wrap max-w-[300px] lg:max-w-full justify-around gap-8 bg-[#333333] px-6 py-4 border-[1px] rounded-2xl border-[#606060]">
                    <a href={"mailto:rahulyavvari.resume@gmail.com"} className="w-12 h-12 transition duration-200 ease-in-out hover:-translate-y-3 hover:scale-130 cursor-pointer"><Image width={45} height={45} className="block shadow-xl" src={"/socials/email.png"} alt={"email"} /></a>
                    <a href={"https://x.com/RahulYavvari"} target="_blank" className="w-12 h-12 transition duration-200 ease-in-out hover:-translate-y-3 hover:scale-130 cursor-pointer"><Image width={45} height={45} className="block shadow-xl rounded-md" src={"/socials/twitter.jpg"} alt={"twitter"} /></a>
                    <a href={"https://www.linkedin.com/in/rahulyavvari/"} target="_blank" className="w-12 h-12 transition duration-200 ease-in-out hover:-translate-y-3 hover:scale-130 cursor-pointer"><Image width={45} height={45} className="block shadow-xl" src={"/socials/linkedin.png"} alt={"linkedinr"} /></a>
                    <a href={"https://github.com/RahulYavvari"} target="_blank" className="w-12 h-12 transition duration-200 ease-in-out hover:-translate-y-3 hover:scale-130 cursor-pointer"><Image width={45} height={45} className="block shadow-xl" src={"/socials/github.png"} alt={"github"} /></a>
                    <a href={"https://www.instagram.com/rahul.yavvari/"} target="_blank" className="w-12 h-12 transition duration-200 ease-in-out hover:-translate-y-3 hover:scale-130 cursor-pointer"><Image width={45} height={45} className="block shadow-xl" src={"/socials/instagram.png"} alt={"instagram"} /></a>
                    <a href={"https://discord.com/users/892764806455656469"} target="_blank" className="w-12 h-12 transition duration-200 ease-in-out hover:-translate-y-3 hover:scale-130 cursor-pointer"><Image width={45} height={45} className="block shadow-xl" src={"/socials/discord.png"} alt={"discord"} /></a>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;