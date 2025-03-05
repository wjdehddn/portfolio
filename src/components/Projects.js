import { Link } from "react-router-dom";
import "./Projects.css";
import { projectData } from "../data/ProjectData";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-wrap">
        <h2>MY PROJECT</h2>
        <p>다양한 웹 애플리케이션을 제작하기 위해 만든 프로젝트입니다.</p>
        <div className="projects-grid">
          {projectData.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
              {/* src 폴더 내 이미지 불러오기 */}
              <img src={`/images/${project.image}.png`} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;