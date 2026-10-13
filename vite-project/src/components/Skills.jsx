import skills from '../data/skills.js'

function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="skills__topline">
        <p>
          <span>02</span>
          My Toolbox &amp; Capabilities
        </p>
        <span className="skills__star" aria-hidden="true">
          ✦
        </span>
      </div>

      <div className="skills__header">
        <h2 id="skills-title">
          Technologies I use to
          <br />
          <span>bring ideas to life.</span>
        </h2>
        <p className="skills__subtitle">
          Focused on modern web standards, component-driven UI architecture, and rapid prototyping tools. No inflated percentage bars—just honest tools and active exploration.
        </p>
      </div>

      <div className="skills__grid">
        {skills.map((categoryGroup, index) => (
          <div key={categoryGroup.category} className="skills__card">
            <div className="skills__card-header">
              <span className="skills__card-number">0{index + 1}</span>
              <h3>{categoryGroup.category}</h3>
            </div>
            <p className="skills__card-description">{categoryGroup.description}</p>

            <ul className="skills__list">
              {categoryGroup.items.map((item) => (
                <li key={item.name} className="skills__item">
                  <div className="skills__item-indicator" aria-hidden="true" />
                  <div className="skills__item-content">
                    <span className="skills__item-name">{item.name}</span>
                    <span className="skills__item-level">{item.level}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
