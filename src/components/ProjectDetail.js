import { useParams, useNavigate } from 'react-router-dom';
import { projectData } from '../data/ProjectData';
import { FaBloggerB } from "react-icons/fa";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find(p => p.id.toString() === id);

  if (!project) {
    return <p className="project-detail">해당 프로젝트를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="project-detail">
      <div className='projects-wrap'>
        <div className="project-info">
          <h3>{project.title}</h3>
          <div className='project-con'>{project["title-con"]}</div>
          <h3>정보 및 링크</h3>
          <div className='project-con'>
            <p><strong>기간:</strong> {project.date}</p>
            <p><strong>사용 기술:</strong> {project.teck}</p>
            <p><strong>주요 기능:</strong> {project.func}</p>
            {project.git && (
              <a href={project.git} target="_blank" rel="noopener noreferrer">
                🔗 GitHub
              </a>
            )}
            {project.url && project.url !== "x" && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                🌐 프로젝트 링크
              </a>
            )}
          </div>
          <h3>트러블슈팅</h3>
          <div className='project-con'>{project.truble}</div>
          <h3>프로젝트 기록</h3>
          <div className="project-con project-links">
            {project.belog && (
              <a href={project.belog} target="_blank" rel="noopener noreferrer">
                <FaBloggerB className="icon" /> Belog
              </a>
            )}
          </div>
        </div>
        <button className="moveBtn" onClick={() => navigate(-1)}>뒤로 가기</button>
      </div>
    </div>
  );
};

export default ProjectDetail;