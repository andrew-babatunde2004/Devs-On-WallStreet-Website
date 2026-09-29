export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <a className="footer-brand" href="#home">Devs on WallStreet</a>
          <p>Finance meets technology at the University of Georgia.</p>
        </div>
        <section id="contact" className="footer-contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Get in touch</h2>
          <p>Contact details coming soon.</p>
        </section>
      </div>
      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Devs on WallStreet</small>
        <nav aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#members">Members</a>
        </nav>
      </div>
    </footer>
  )
}
