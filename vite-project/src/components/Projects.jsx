import { useState } from 'react'
import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

function Projects() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filterOptions = ['All', 'Live', 'In Progress', 'Experiment']

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.status === filter)

  const closeModal = () => setSelectedProject(null)

  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="projects__topline">
        <p>
          <span>03</span>
          Selected Projects &amp; Experiments
        </p>
        <span className="projects__star" aria-hidden="true">
          ✦
        </span>
      </div>

      <div className="projects__header">
        <div className="projects__header-text">
          <h2 id="projects-title">
            Featured work &amp;
            <br />
            <span>code explorations.</span>
          </h2>
          <p className="projects__subtitle">
            A curated showcase of real projects, interface prototypes, and interactive tools built while learning modern frontend development.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects__filters" role="tablist" aria-label="Filter projects by status">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              role="tab"
              aria-selected={filter === opt}
              className={`projects__filter-btn ${filter === opt ? 'is-active' : ''}`}
              onClick={() => setFilter(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="projects__grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelectProject={setSelectedProject}
          />
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={closeModal}
        >
          <div
            className="project-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal__close"
              onClick={closeModal}
              aria-label="Close project modal"
            >
              ✕
            </button>

            <div className="project-modal__header">
              <span className="project-modal__badge">{selectedProject.status}</span>
              <h3 id="modal-title" className="project-modal__title">
                {selectedProject.title}
              </h3>
              <p className="project-modal__summary">{selectedProject.summary}</p>
            </div>

            <div className="project-modal__body">
              <div className="project-modal__section">
                <h4>Architecture &amp; Concept</h4>
                <p>{selectedProject.description}</p>
              </div>

              {selectedProject.highlights && (
                <div className="project-modal__section">
                  <h4>Key Highlights</h4>
                  <ul className="project-modal__highlights">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i}>
                        <span aria-hidden="true">✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-modal__section">
                <h4>Tech Stack</h4>
                <ul className="project-card__tags">
                  {selectedProject.tags.map((tag) => (
                    <li key={tag} className="project-card__tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-modal__footer">
              {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                <a
                  href={selectedProject.demoUrl}
                  className="hero__btn hero__btn--primary"
                  target={selectedProject.demoUrl.startsWith('http') ? '_blank' : '_self'}
                  rel={selectedProject.demoUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  Live Preview ↗
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  className="hero__btn hero__btn--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Source ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
