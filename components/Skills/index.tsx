import Subsection from "@/components/Skills/Subsection";

const Skills = () => {
    return (
        <section className="section-container" id="skills">
            <div className="flex flex-col gap-[2rem]">
            <h1 className="dela-gothic--font text-[2rem]">Skills</h1>
                <Subsection id={"languages"} title={"Languages"}/>
                <Subsection id={"technologies"} title={"Technologies"}/>

            </div>
        </section>
    );
}

export default Skills;