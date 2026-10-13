function QuoteSection() {
  return (
    <section className="testimonial" id="philosophy" aria-labelledby="testimonial-title">
      <div className="testimonial__heading">
        <p>
          <span>06</span>
          Perspective &amp; Direction
        </p>
        <h2 id="testimonial-title">What I’m building toward</h2>
      </div>

      <figure className="testimonial__card">
        <span className="testimonial__mark" aria-hidden="true">
          “
        </span>
        <blockquote>
          Good design isn’t about unnecessary complexity. It’s about taking an ambitious idea, stripping away the noise, and crafting something purposeful that people truly enjoy using.
        </blockquote>
        <figcaption>
          <span className="testimonial__rule" aria-hidden="true" />
          <span>
            <strong>Hamza Alam</strong>
            <small>Personal Design Creed · Learning in Public</small>
          </span>
          <span className="testimonial__spark" aria-hidden="true">
            ✦
          </span>
        </figcaption>
      </figure>
    </section>
  )
}

export default QuoteSection
