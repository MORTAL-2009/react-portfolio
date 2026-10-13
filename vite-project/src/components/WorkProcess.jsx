import process from '../data/process.js'

function WorkProcess() {
  return (
    <section className="work-process" id="process" aria-labelledby="work-process-title">
      <div className="work-process__heading">
        <p className="work-process__eyebrow">
          <span>05</span>
          From first idea to final detail
        </p>
        <h2 id="work-process-title">
          Good work starts
          <br />
          with a <span>good process.</span>
        </h2>
        <p className="work-process__intro">
          Clear steps, open collaboration, and thoughtful design at every stage of turning an idea into reality.
        </p>
      </div>

      <ol className="work-process__steps">
        {process.map((step) => (
          <li key={step.number}>
            <span className="work-process__number">{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            <span className="work-process__arrow" aria-hidden="true">
              ↗
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default WorkProcess
