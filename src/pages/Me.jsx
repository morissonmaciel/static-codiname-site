const skills = [
  'Swift', 'SwiftUI', 'UIKit', 'iOS', 'Server Driven UI', 'Snapshot Testing',
  'LLM Engineering', 'RAG', 'Prompt Engineering', 'LangChain', 'OpenAI Agents',
  'Claude Code', 'n8n', 'Apple Intelligence', '.NET', 'Node.js', 'React',
  'AWS', 'Docker',
]

const experiences = [
  {
    company: 'Autônomo',
    role: 'Engenheiro e Consultor em IA Agêntica',
    period: 'out 2025 – presente',
    location: 'São Paulo',
    description:
      'Consultoria especializada em IA agêntica para empresas e startups. Desenvolvimento de pipelines RAG, integração de LLMs (OpenAI, Claude, Gemini), automações com n8n e construção de chatbots inteligentes com contexto de negócio.',
  },
  {
    company: 'Autônomo',
    role: 'Desenvolvedor iOS Independente',
    period: 'mar 2025 – presente',
    location: 'São Paulo',
    description:
      'Desenvolvimento e publicação de apps no App Store e Mac App Store. Destaque para Photo Gemini, app de análise de imagens com IA disponível em ambas as plataformas.',
  },
  {
    company: 'Zup Innovation / Itaú Unibanco',
    role: 'iOS Developer Specialist',
    period: 'mar 2021 – fev 2025',
    location: 'São Paulo',
    description:
      'Atuação nos super apps Iti e Itaú Unibanco. Implementação de arquitetura Server Driven UI para entregas dinâmicas de UI via backend. Adoção pioneira de ferramentas de desenvolvimento assistido por IA na squad.',
  },
  {
    company: 'Meta (Consultoria)',
    role: 'Eng. Software Sênior / Líder Técnico',
    period: '2012 – 2021',
    location: 'Rio de Janeiro',
    description:
      'TV Globo: arquitetura de plataformas digitais com AWS, React e Node.js, liderança técnica de times multidisciplinares. Light Serviços de Eletricidade: desenvolvimento de sistemas críticos com .NET Core, Angular, Docker e práticas BDD/TDD.',
  },
  {
    company: 'BTG Pactual',
    role: 'Arquiteto de Sistemas',
    period: 'out 2010 – jul 2012',
    location: 'Rio de Janeiro',
    description:
      'Integração de sistemas legados com SAP e plataformas de gestão ALM. Definição de padrões de arquitetura para o time de TI do banco.',
  },
  {
    company: 'Synapsis',
    role: 'Arquiteto de Sistemas',
    period: 'jul 2007 – set 2010',
    location: 'Rio de Janeiro',
    description:
      'Arquitetura do CRM AIC para Endesa Brasil. Implementação de processos de qualidade CMMi/MPSBr e liderança técnica de projetos de transformação digital.',
  },
  {
    company: 'Início de Carreira',
    role: 'Provider, Quality Software, UNITECH, SEBRAE/BA',
    period: '2002 – 2007',
    location: 'Bahia',
    description:
      'Desenvolvimento de sistemas em .NET, J2EE e ASP.NET. Primeiras experiências em arquitetura de software, análise de requisitos e entrega de projetos para o setor público e privado.',
  },
]

const languages = [
  { lang: 'Português', level: 'Nativo' },
  { lang: 'Inglês',    level: 'Fluente' },
  { lang: 'Espanhol',  level: 'Profissional' },
  { lang: 'Francês',   level: 'Básico' },
]

const certifications = [
  { name: 'MS .NET 70-536',      issuer: 'Microsoft Certified' },
  { name: 'English Proficiency', issuer: 'Voxy' },
]

const apps = [
  {
    id: 'photo-gemini',
    name: 'Photo Gemini',
    tagline: 'Gerencie fotos duplicadas com privacidade',
    description:
      'Identifica e remove fotos duplicadas e semelhantes da sua fototeca. Totalmente local — nenhum dado enviado para servidores externos.',
    platforms: ['iOS', 'macOS'],
    appStoreUrl: 'https://apps.apple.com/us/app/photo-gemini/id6736348808',
  },
]

function IconLinkedIn() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconEmail() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function IconPin() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function Me() {
  return (
    <div className="content">

      {/* Hero */}
      <section className="hero">
        <img
          src="/avatar.jpeg"
          alt="Morisson Maciel"
          className="hero-avatar"
        />
        <h1 className="hero-name">Morisson Marcel Ferreira Maciel</h1>
        <p className="hero-subtitle">iOS Specialist &amp; Agentic AI Engineer</p>
        <p className="hero-location">
          <IconPin /> São Paulo, Brasil
        </p>
        <div className="hero-links">
          <a
            href="https://linkedin.com/in/morissonmaciel"
            className="hero-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedIn /> LinkedIn
          </a>
          <a
            href="https://github.com/morissonmaciel/"
            className="hero-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGitHub /> GitHub
          </a>
          <a href="mailto:morissonmaciel@gmail.com" className="hero-link">
            <IconEmail /> morissonmaciel@gmail.com
          </a>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <h2 className="section-title">Sobre</h2>
        <div className="about-text">
          <p>
            Engenheiro de software com mais de 20 anos de experiência, especializado em desenvolvimento
            iOS nativo e, mais recentemente, em engenharia de IA agêntica. Tenho profundo domínio de
            Swift, SwiftUI e UIKit, com passagens por grandes produtos como os super apps do Itaú Unibanco.
          </p>
          <p>
            Hoje combino essa bagagem mobile com arquitetura de sistemas inteligentes — pipelines RAG,
            integração de LLMs e automações com agentes de IA — para criar soluções que expandem o
            que é possível construir com software moderno.
          </p>
        </div>
        <div className="tags" aria-label="Competências técnicas">
          {skills.map((skill) => (
            <span key={skill} className="tag">{skill}</span>
          ))}
        </div>
      </section>

      {/* Apps & Sites */}
      <section className="section">
        <h2 className="section-title">Apps &amp; Sites</h2>
        <div className="app-cards">
          {apps.map((app) => (
            <div key={app.id} className="app-card">
              <div className="app-card-body">
                <img
                  src="/photo-gemini-icon.png"
                  alt="Photo Gemini icon"
                  className="app-card-icon"
                  width="60"
                  height="60"
                />
                <div className="app-card-info">
                  <div className="app-card-name">{app.name}</div>
                  <div className="app-card-tagline">{app.tagline}</div>
                  <div className="app-card-platforms">
                    {app.platforms.map((p) => (
                      <span key={p} className="app-platform-tag">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="app-card-desc">{app.description}</p>
              <a
                href={app.appStoreUrl}
                className="app-store-badge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Download ${app.name} on the App Store`}
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
                  alt="Download on the App Store"
                  height="40"
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">Experiência</h2>
        <ol className="experience-list" style={{ listStyle: 'none', padding: 0 }}>
          {experiences.map((exp, i) => (
            <li key={i} className="exp-item">
              <div className="exp-header">
                <div>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-role">{exp.role}</div>
                </div>
                <div className="exp-meta">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              <p className="exp-desc">{exp.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="section">
        <h2 className="section-title">Formação</h2>
        <div className="edu-item">
          <div>
            <div className="edu-school">Universidade Federal da Bahia — UFBA</div>
            <div className="edu-degree">Bacharelado em Ciências da Computação</div>
          </div>
          <div className="edu-year">2002 – 2006</div>
        </div>
      </section>

      {/* Languages & Certs */}
      <section className="section">
        <h2 className="section-title">Idiomas &amp; Certificações</h2>
        <div className="grid-2col">
          <div>
            <div className="grid-subsection-title">Idiomas</div>
            <ul className="lang-list">
              {languages.map(({ lang, level }) => (
                <li key={lang}>
                  <span>{lang}</span>
                  <span className="lang-level">{level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="grid-subsection-title">Certificações</div>
            <ul className="cert-list">
              {certifications.map(({ name, issuer }) => (
                <li key={name}>
                  <span>{name}</span>
                  <span className="lang-level">{issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  )
}
