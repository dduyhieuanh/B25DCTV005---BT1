function Projects({ projects }) {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.name}</h3>

          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;