import Subsection from "@/components/Skills/Subsection";

const Skills = () => {
    return (
        <section className="section-container scroll-mt-[30px] md:scroll-mt-[100px]" id="skills">
            <div className="flex flex-col gap-[2rem]">
            <h1 className="dela-gothic--font text-[2rem]">Skills</h1>
                <Subsection id={"languages"} title={"Languages"} content={["JavaScript", "TypeScript", "HTML5", "CSS3", "Java", "C/C++", "Python"]}/>
                <Subsection id={"technologies"} title={"Technologies"} content={["ReactJS", "NextJS", "Redux Tool Kit", "Tailwind", "Vite", "Jest", "NodeJS", "REST", "GraphQL"]}/>
                <Subsection id={"additional-skills"} title={"Additonal Skills"} content={["Git", "MongoDB", "MySQL", "Docker", "Figma", "Postman", "AWS S3/Lambda"]}/>

            </div>
        </section>
    );
}

export default Skills;