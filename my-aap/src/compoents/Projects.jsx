import { projectData } from "./data"
import { FaFolderOpen, FaGithub } from "react-icons/fa"

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projetos</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <FaFolderOpen className="fa-regular fa-folder-open folder-icon"/>
                            <div className="small-icons">
                                <a href={project.githubLink}>
                                    <FaGithub className="fa-brands fa-github"/>
                                </a>
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects