import { useState } from 'react'
import { contactInfo, socialLinks } from '../data/socialLinks.js'

function Footer() {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(contactInfo.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }).catch(() => {
      // Fallback
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Open default email client with pre-filled message as transparent static implementation
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name || 'Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoUrl
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 4000)
  }

  return (
    <footer className="footer" id="contact" aria-labelledby="footer-title">
      <div className="footer__main">
        <div className="footer__intro">
          <p className="footer__eyebrow">Have an idea or opportunity?</p>
          <h2 id="footer-title">
            Let’s build
            <br />
            something<span aria-hidden="true">✦</span>
          </h2>
          <p className="footer__description">
            Whether you want to discuss a new website idea, share feedback on my projects, or just talk tech and design—my inbox is always open.
          </p>
          <p className="footer__availability">
            <span aria-hidden="true">↗</span>
            {contactInfo.status}
          </p>

          {/* Interactive Quick Contact Form */}
          <form className="footer__form" onSubmit={handleFormSubmit}>
            <div className="footer__form-group">
              <input
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="footer__input"
                aria-label="Your Name"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="footer__input"
                aria-label="Your Email"
              />
            </div>
            <textarea
              placeholder="What would you like to build together?"
              rows="2"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="footer__textarea"
              aria-label="Message"
            />
            <div className="footer__form-actions">
              <button type="submit" className="hero__btn hero__btn--primary">
                Send Message via Mail ↗
              </button>
              {formSubmitted && (
                <span className="footer__form-success" role="status">
                  ✓ Opening your mail client...
                </span>
              )}
            </div>
          </form>
        </div>

        <div className="footer__contact">
          <button
            type="button"
            className="footer__contact-link footer__contact-btn"
            onClick={handleCopyEmail}
            aria-label={`Copy email address ${contactInfo.email}`}
          >
            <span className="footer__contact-icon" aria-hidden="true">
              @
            </span>
            <span>
              <small>Click to copy email</small>
              {copied ? '✓ Copied to clipboard!' : contactInfo.email}
            </span>
            <span className="footer__contact-arrow" aria-hidden="true">
              {copied ? '✓' : '↗'}
            </span>
          </button>

          <a className="footer__contact-link" href="#projects">
            <span className="footer__contact-icon" aria-hidden="true">
              ✦
            </span>
            <span>
              <small>Explore Work</small>
              View Selected Projects
            </span>
            <span className="footer__contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a className="footer__contact-link" href="#about">
            <span className="footer__contact-icon" aria-hidden="true">
              ↗
            </span>
            <span>
              <small>About Hamza</small>
              Background &amp; Philosophy
            </span>
            <span className="footer__contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <div className="footer__visual" aria-hidden="true">
          <div className="footer__glow" />
          <div className="footer__laptop">
            <div className="footer__screen">
              <div className="footer__screen-top">
                <span />
                <span />
                <span />
              </div>
              <div className="footer__screen-content">
                <p>
                  WEB
                  <br />
                  DESIGN
                  <br />
                  DIGITAL
                  <br />
                  CRAFT
                </p>
                <span />
              </div>
            </div>
            <div className="footer__laptop-base" />
          </div>
        </div>
      </div>

      <div
        className="footer__channels"
        aria-label="Social media profiles"
      >
        <p className="footer__channels-heading">Connect &amp; Follow</p>
        <div className="footer__channel-list">
          {socialLinks.map((item) => (
            <a
              key={item.platform}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__channel footer__channel--interactive"
              aria-label={`Visit Hamza on ${item.platform}`}
            >
              <span aria-hidden="true">↗</span>
              <div>
                <strong>{item.platform}</strong>
                <small>{item.handle}</small>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <a href="#home" aria-label="Back to top">
          HAMZA<span>.</span>
        </a>
        <p>
          &copy; {new Date().getFullYear()} Mohd Hamza Alam Khan. Crafted with React &amp; Tailwind CSS.
        </p>
        <a className="footer__back-to-top" href="#home" aria-label="Back to top of the page">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
