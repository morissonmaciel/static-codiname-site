import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('fade-in-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Home() {
  const bannerRef = useFadeIn()

  return (
    <div className="content">

      {/* Company intro */}
      <section className="home-hero">
        <p className="home-hero-label">Software Independente</p>
        <h1 className="home-hero-title">Criamos software com cuidado, propósito e privacidade.</h1>
        <p className="home-hero-desc">
          Codiname é um estúdio independente de desenvolvimento de software focado em apps para
          Apple e soluções de engenharia de IA. Cada produto é construído com atenção aos detalhes,
          respeito à privacidade do usuário e experiência de uso que importa.
        </p>
      </section>

      {/* Products section */}
      <section id="produtos" className="section">
        <h2 className="section-title">Produtos</h2>

        <div className="product-banner fade-in-target" ref={bannerRef}>
          <div className="product-banner-header">
            <img
              src="/photo-gemini-icon.png"
              alt="Photo Gemini icon"
              className="product-banner-icon"
              width="56"
              height="56"
            />
            <div className="product-banner-meta">
              <div className="product-banner-name">Photo Gemini</div>
              <div className="product-banner-platforms">
                <span className="app-platform-tag">iOS</span>
                <span className="app-platform-tag">macOS</span>
              </div>
            </div>
          </div>
          <p className="product-banner-tagline">
            Gerencie sua fototeca identificando e removendo fotos duplicadas e semelhantes —
            totalmente local, sem enviar dados para servidores externos.
          </p>
          <div className="product-banner-actions">
            <Link to="/products" className="btn-primary">Saiba mais</Link>
            <a
              href="https://apps.apple.com/us/app/photo-gemini/id6736348808"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>

        <div className="all-products-row">
          <Link to="/products" className="all-products-link">Todos os produtos →</Link>
        </div>
      </section>

      {/* What we do */}
      <section className="section">
        <h2 className="section-title">O que fazemos</h2>
        <div className="about-text">
          <p>
            Desenvolvemos aplicativos nativos para iOS e macOS com foco em qualidade,
            desempenho e privacidade. Nossos apps processam dados localmente, sem dependência
            de servidores externos ou coleta de informações pessoais.
          </p>
          <p>
            Também atuamos em consultoria de engenharia de IA agêntica — pipelines RAG,
            integração de LLMs, automações inteligentes e sistemas que combinam o melhor da
            IA moderna com arquitetura de software sólida.
          </p>
        </div>
      </section>

    </div>
  )
}
