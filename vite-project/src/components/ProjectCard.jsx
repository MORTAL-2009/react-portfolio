function ProjectCard({ project, onSelectProject }) {
  const { title, summary, tags, status, demoUrl, githubUrl, accentColor } = project

  const statusStyles = {
    Live: 'badge--live',
    'In Progress': 'badge--progress',
    Experiment: 'badge--experiment',
  }

  return (
    <article className="project-card" style={{ '--card-accent': accentColor || '#c91f2e' }}>
      <div className="project-card__preview">
        <div className="project-card__preview-bg" />
        <div className="project-card__preview-content">
          <span className={`project-card__status ${statusStyles[status] || ''}`}>
            <span className="status-dot" aria-hidden="true" />
            {status}
          </span>
          <span className="project-card__preview-symbol" aria-hidden="true">
            ✦
          </span>
          <div className="project-card__preview-title-overlay">
            <span>{title}</span>
          </div>
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{title}</h3>
        </div>

        <p className="project-card__summary">{summary}</p>

        <ul className="project-card__tags" aria-label="Technologies used">
          {tags.map((tag) => (
            <li key={tag} className="project-card__tag">
              {tag}
            </li>
          ))}
        </ul>

        <div className="project-card__footer">
          <button
            type="button"
            className="project-card__action-btn project-card__action-btn--detail"
            onClick={() => onSelectProject(project)}
            aria-label={`View detailed overview for ${title}`}
          >
            <span>Overview</span>
            <span aria-hidden="true">↗</span>
          </button>

          <div className="project-card__links">
            {demoUrl && demoUrl !== '#' && (
              <a
                href={demoUrl}
                target={demoUrl.startsWith('http') ? '_blank' : '_self'}
                rel={demoUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="project-card__link"
                aria-label={`Visit live demo for ${title}`}
              >
                <span>Demo</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                aria-label={`View source code on GitHub for ${title}`}
              >
                <span>Code</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
