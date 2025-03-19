
const SkillTab = ({tag}: {tag: string}) => {
    return (
        <div className="rounded-full flex gap-2 justify-center items-center border border-[#5d5d5d] bg-[#3f3f3f82] px-3 py-2">
            <div className="w-6 h-6 bg-blue-900 rounded-sm"></div>
            <div>{tag}</div>
        </div>
    );
}

export default SkillTab;