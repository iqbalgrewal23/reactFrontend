import React, { useEffect, useState } from 'react';
import { getProjects } from '../api/api';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.url && <a href={project.url}>View Project</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;