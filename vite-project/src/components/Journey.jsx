import journey from '../data/journey.js'

function Journey() {
  return (
    <section className="journey" id="journey" aria-labelledby="journey-title">
      <div className="journey__topline">
        <p>
          <span>04</span>
          Learning Timeline &amp; Milestones
        </p>
        <span className="journey__star" aria-hidden="true">
          ✦
        </span>
      </div>

      <div className="journey__header">
        <h2 id="journey-title">
          The path of continuous
          <br />
          <span>curiosity &amp; growth.</span>
        </h2>
        <p className="journey__subtitle">
          How a Class 12 commerce student ventured into web design, coding with AI, and building real digital projects step by step.
        </p>
      </div>

      <div className="journey__timeline">
        <div className="journey__line" aria-hidden="true" />

        {journey.map((item, index) => (
          <div key={item.phase} className="journey__item">
            <div className="journey__node" aria-hidden="true">
              <span className="journey__node-dot" />
              <span className="journey__node-pulse" />
            </div>

            <div className="journey__card">
              <div className="journey__card-top">
                <span className="journey__phase">{item.phase}</span>
                <span className="journey__period">{item.period}</span>
                <span className="journey__badge">{item.badge}</span>
              </div>

              <h3 className="journey__item-title">{item.title}</h3>
              <p className="journey__item-subtitle">{item.subtitle}</p>
              <p className="journey__item-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Journey
