import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="content">
      <section className="home-hero">
        <p className="home-hero-label">Software Independente</p>
        <h1 className="home-hero-title">Criamos software com cuidado, propósito e privacidade.</h1>
        <p className="home-hero-desc">
          Codiname é um estúdio independente de desenvolvimento de software focado em apps para
          Apple e soluções de engenharia de IA. Cada produto é construído com atenção aos detalhes,
          respeito à privacidade do usuário e experiência de uso que importa.
        </p>
        <div className="home-nav-cards">
          <Link to="/me" className="home-nav-card">
            <span className="home-nav-card-title">Sobre Mim</span>
            <span className="home-nav-card-desc">Conheça o desenvolvedor por trás da Codiname</span>
          </Link>
          <Link to="/products" className="home-nav-card">
            <span className="home-nav-card-title">Produtos</span>
            <span className="home-nav-card-desc">Apps publicados no App Store e Mac App Store</span>
          </Link>
          <Link to="/contacts" className="home-nav-card">
            <span className="home-nav-card-title">Contato</span>
            <span className="home-nav-card-desc">Entre em contato para projetos ou parcerias</span>
          </Link>
        </div>
      </section>

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
