import SkillTab from "@/components/Skills/SkillTab";

const Subsection = ({id, title}: { id: string; title: string }) => {
    return (
        <div id={id}>
        <h2 className="dela-gothic--font text-[#cccccc] text-2xl">{title}</h2>
        <div className="flex flex-wrap my-4 gap-3 text-sm">
            <SkillTab tag={"JavaScript"}/>
            <SkillTab tag={"TypeScript"}/>
            <SkillTab tag={"C"}/>
            <SkillTab tag={"C++"}/>
            <SkillTab tag={"Java"}/>
            <SkillTab tag={"NodeJS"}/>
            <SkillTab tag={"Python"}/>
            <SkillTab tag={"Bash"}/>
            <SkillTab tag={"Lua"}/>
            <SkillTab tag={"Algol"}/>
            <SkillTab tag={"Basic"}/>
            <SkillTab tag={"C#"}/>
            <SkillTab tag={"MATLAB"}/>
            <SkillTab tag={"Rust"}/>
            <SkillTab tag={"Go"}/>

        </div>
    </div>
    );
}

export default Subsection;