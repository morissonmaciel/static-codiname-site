function IconEmail() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export default function Contacts() {
  return (
    <div className="content">
      <section className="contact-section">
        <h1 className="hero-name" style={{ marginBottom: '16px' }}>Contato</h1>
        <p className="contact-lead">
          Tem um projeto em mente, quer conversar sobre uma consultoria ou simplesmente
          dizer olá? Entre em contato.
        </p>
        <div>
          <div className="contact-link-row">
            <span className="contact-link-label">Email</span>
            <a href="mailto:contact@codiname.com" className="contact-link">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <IconEmail />
                contact@codiname.com
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
