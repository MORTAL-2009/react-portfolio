function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__topline">
        <p>
          <span>01</span>
          A little about me
        </p>
        <span className="about__star" aria-hidden="true">
          ✦
        </span>
      </div>

      <div className="about__main">
        <h2 id="about-title">
          Curiosity-driven
          <br />
          <span>design &amp; code.</span>
        </h2>
        <div className="about__copy">
          <p className="about__lead">
            I’m Mohd Hamza Alam Khan, a Class 12 commerce student fascinated by the intersection of business, design, and code.
          </p>
          <p>
            Instead of waiting for a college degree to get started, I'm actively teaching myself modern web development—experimenting with React, Tailwind CSS, and AI-assisted workflows. When I’m not coding or studying, I’m focused on fitness, exploring creative UI layouts, and discovering how digital products communicate value.
          </p>
          <p className="about__subcopy">
            I believe the best way to master any craft is through continuous, honest iteration—building real things from scratch, learning from every bug, and putting purpose behind every pixel.
          </p>
        </div>
      </div>

      <div className="about__principles" aria-label="Core design principles">
        <article>
          <span>01</span>
          <h3>Clarity First</h3>
          <p>Remove friction so interfaces feel intuitive, readable, and effortless to navigate.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Continuous Craft</h3>
          <p>Treat every small interaction, font choice, and border line with deliberate care.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Honest Growth</h3>
          <p>Focus on real problem solving and practical execution over inflated claims.</p>
        </article>
      </div>
    </section>
  )
}

export default About
