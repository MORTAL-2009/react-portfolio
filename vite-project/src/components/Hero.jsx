function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <p className="hero__wordmark" aria-hidden="true">
        PORTFOLIO
      </p>

      <div className="hero__portrait-frame">
        <img
          className="hero__portrait"
          src="/images/profile.jpeg"
          alt="Portrait of Mohd Hamza Alam Khan"
          loading="eager"
        />
      </div>

      <div className="hero__content">
        <div className="hero__intro">
          <p className="hero__greeting">Hello, I’m</p>
          <h1 id="hero-title">
            Hamza
            <span>Aspiring Web Designer &amp;</span>
            <span>Frontend Developer</span>
          </h1>
          <p className="hero__description">
            Class 12 commerce student learning to craft websites with AI and experimenting with modern design, intuitive interfaces, and interactive web experiences.
          </p>

          <div className="hero__actions">
            <a className="hero__btn hero__btn--primary" href="#projects">
              Explore My Work
              <span aria-hidden="true">→</span>
            </a>
            <a className="hero__btn hero__btn--secondary" href="#about">
              About Me
            </a>
          </div>

          <p className="hero__location">
            <span aria-hidden="true" />
            Available worldwide · Open to Collaborations
          </p>
        </div>

        <div className="hero__side">
          <div className="hero__statement">
            <span className="hero__spark" aria-hidden="true">
              ✦
            </span>
            <p>
              Turning ideas
              <br />
              into thoughtful
              <br />
              digital experiences.
            </p>
          </div>

          <dl className="hero__stats">
            <div>
              <dt>Std 12</dt>
              <dd>Commerce student</dd>
            </div>
            <div>
              <dt>Hands-on</dt>
              <dd>Learning by building</dd>
            </div>
            <div>
              <dt>Web &amp; AI</dt>
              <dd>Core focus area</dd>
            </div>
          </dl>

          <a className="hero__scroll-indicator" href="#about" aria-label="Scroll down to About section">
            <span>Scroll down</span>
            <span className="hero__scroll-arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
