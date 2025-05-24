
const Project = ( {title, description, imgSrc, githubURL, demoURL}: {title: string, description: string, imgSrc: string | null, githubURL: string | null, demoURL: string | null} ) => {
    return (
        <div className="flex flex-col gap-1 p-3 border-[1px] border-[#6C6C6C] rounded-2xl bg-[#333333] transition duration-300 ease-in-out hover:shadow-[0_4px_15px_rgba(255,255,255,0.1)] hover:-translate-y-1 hover:scale-[1.03]">
                    { !imgSrc ? 
                    <div className="w-[100%] h-[160px] mx-auto rounded-xl bg-[#d7d7d7]"></div>
                    : <img src={imgSrc ?? ""} alt="project-image" />}

                    <h2 className="dela-gothic--font mt-2 ml-1.5 mr-1.5">{title}</h2>
                    <p className="text-[0.85rem]  ml-1.5 mr-1.5 leading-4">{description}</p>
                    <div className="mt-2 ml-1.5 mr-1.5 flex gap-4">
                        { githubURL ? <span className="hover:underline flex"><a href={githubURL ?? "#"} target="_blank">Github</a><svg className="w-5 h-5" fill="#ffffff" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g data-name="Layer 2"><g data-name="diagonal-arrow-right-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" /></g></g></svg></span> : null}
                        { demoURL ? <span className="hover:underline text-blue-400"><a href={demoURL ?? "#"} target="_blank">Demo</a></span> : null}
                    </div>
        </div>
    );
}

export default Project;