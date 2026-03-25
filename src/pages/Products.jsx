export default function Products() {
  return (
    <div className="content">
      <section className="hero" style={{ paddingBottom: '48px' }}>
        <h1 className="hero-name">Produtos</h1>
        <p className="hero-subtitle">Apps publicados no App Store e Mac App Store</p>
      </section>

      <section className="section">
        <h2 className="section-title">Apps disponíveis</h2>
        <div className="app-cards">
          <div className="product-card">
            <div className="product-card-header">
              <img
                src="/photo-gemini-icon.png"
                alt="Photo Gemini icon"
                className="product-card-icon"
                width="80"
                height="80"
              />
              <div className="product-card-meta">
                <div className="product-card-name">Photo Gemini</div>
                <div className="product-card-tagline">Gerencie fotos duplicadas com privacidade</div>
                <div className="product-card-platforms">
                  <span className="app-platform-tag">iOS</span>
                  <span className="app-platform-tag">macOS</span>
                </div>
              </div>
            </div>
            <p className="product-card-desc">
              Ferramenta para gerenciar fotos duplicadas, criada para ajudar você a organizar sua
              fototeca ao identificar e remover imagens duplicadas e semelhantes. Interface simples,
              algoritmo de correspondência flexível e totalmente local — sem enviar dados para
              servidores externos.
            </p>
            <a
              href="https://apps.apple.com/us/app/photo-gemini/id6736348808"
              className="app-store-badge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Photo Gemini on the App Store"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
                alt="Download on the App Store"
                height="40"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
