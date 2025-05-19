import Project from "./Project";
import { projects } from "@/constants/projects";

const Projects = () => {
    return (
        <section className="section-container scroll-mt-[50px] md:scroll-mt-[100px]" id="projects">
            <div className="flex flex-col gap-[3rem]">
            <h1 className="dela-gothic--font text-[2rem]">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-start mx-auto">
                {projects.map((project) => <Project key={project.id} title={project.title} description={project.description} imgSrc={project.imgSrc} demoURL={project.demoURL} githubURL={project.githubURL}/>)}
            </div>
            </div>
        </section>
    );
}

export default Projects;