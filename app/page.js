const lenses = [
  {
    title: 'Lentes em Resina',
    text: 'Construção artesanal, personalizada e planejada para preservar naturalidade, proporção e identidade.',
    image: '/placeholder-case-1.svg',
  },
  {
    title: 'Lentes em Porcelana',
    text: 'Planejamento individual, acabamento refinado e escolha criteriosa de forma, textura e cor.',
    image: '/placeholder-case-2.svg',
  },
  {
    title: 'Retratamento de Lentes',
    text: 'Uma nova leitura para casos antigos, buscando saúde, adaptação, equilíbrio e naturalidade.',
    image: '/placeholder-case-3.svg',
  },
]

const treatments = [
  'Alinhadores',
  'Implantes',
  'Periodontia',
  'Clareamento',
  'Endodontia',
  'Clínica geral',
]

const faqs = [
  ['Qual a diferença entre lentes em resina e porcelana?', 'A indicação depende do caso clínico, expectativas, estrutura dental, hábitos e planejamento. Nesta primeira versão, o texto é apenas estrutural.'],
  ['As lentes desgastam os dentes?', 'A necessidade de preparo varia conforme o caso. A avaliação individual é indispensável para definir a conduta adequada.'],
  ['Quanto tempo duram as lentes?', 'A longevidade depende de técnica, material, hábitos, manutenção e características individuais.'],
  ['Como saber qual técnica é ideal para mim?', 'A decisão é feita em avaliação, após análise do sorriso, face, saúde bucal e objetivos do paciente.'],
  ['Vocês atendem pacientes de outras cidades?', 'Sim. Nesta estrutura inicial, os detalhes de logística serão inseridos posteriormente.'],
  ['Como funciona a avaliação?', 'A avaliação envolve escuta, análise clínica, planejamento e definição dos próximos passos.'],
]

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Bulhões Odontologia">
          <div className="brand-mark">B</div>
          <div className="brand-copy">
            <strong>BULHÕES</strong>
            <span>ODONTOLOGIA</span>
            <em>Naturalidade é o nosso maior luxo.</em>
          </div>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#lentes">Lentes</a>
          <a href="#metodo">Método Bulhões</a>
          <a href="#resultados">Resultados</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#equipe">Equipe</a>
          <a href="#clinica">Clínica</a>
          <a href="#faq">FAQ</a>
          <a href="#endereco">Endereço</a>
        </nav>
      </div>
    </header>
  )
}

function CTA({ label = 'AGENDE SUA AVALIAÇÃO' }) {
  return (
    <a className="cta" href="https://wa.me/55XXXXXXXXXXX" target="_blank" rel="noreferrer">
      <span className="cta-icon">↗</span>
      {label}
    </a>
  )
}

export default function HomePage() {
  return (
    <main>
      <Header />

      <section id="inicio" className="section hero">
        <div className="container split hero-grid">
          <div className="image-card hero-image" aria-label="Imagem de paciente placeholder">
            <img src="/placeholder-hero.svg" alt="Placeholder de paciente sorrindo" />
          </div>
          <div className="hero-content">
            <p className="eyebrow">LENTES DE CONTATO DENTAL • SANTOS</p>
            <h1>Lentes de contato dental que respeitam a naturalidade do seu sorriso.</h1>
            <p className="lead">Cada sorriso possui características únicas. Na Bulhões, cada caso é planejado individualmente para alcançar equilíbrio, naturalidade e coerência com cada paciente.</p>
            <p className="small-note"><strong>Resina ou porcelana:</strong> a técnica é escolhida a partir das necessidades de cada sorriso.</p>
            <CTA />
          </div>
        </div>
      </section>

      <section className="section soft" id="beneficios">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">POR QUE BULHÕES?</p>
            <h2>Uma clínica construída em torno de um olhar especializado para lentes.</h2>
          </div>
          <div className="stats-grid">
            <article><span>+X.XXX</span><p>casos realizados</p></article>
            <article><span>Método Bulhões</span><p>planejamento e técnica próprios</p></article>
            <article><span>Especialistas</span><p>em diferentes áreas da odontologia</p></article>
            <article><span>Resina + Porcelana</span><p>duas técnicas, um mesmo compromisso com naturalidade</p></article>
          </div>
          <CTA />
        </div>
      </section>

      <section id="metodo" className="section dark-section">
        <div className="container split method-grid">
          <div>
            <p className="eyebrow light">MÉTODO BULHÕES</p>
            <h2>Naturalidade não acontece por acaso. Ela começa no planejamento.</h2>
            <p>O Método Bulhões parte da individualidade de cada sorriso. Forma, textura, cor, proporção, função e características faciais são analisadas em conjunto antes de qualquer decisão estética.</p>
            <p>Nesta primeira versão, o conteúdo é propositalmente enxuto. Depois substituímos por textos definitivos, números reais e detalhes técnicos aprovados pela clínica.</p>
            <CTA label="CONHEÇA NOSSO PLANEJAMENTO" />
          </div>
          <div className="image-card method-image"><img src="/placeholder-method.svg" alt="Placeholder do Método Bulhões" /></div>
        </div>
      </section>

      <section id="lentes" className="section">
        <div className="container">
          <div className="section-heading two-col-heading">
            <div>
              <p className="eyebrow">LENTES DE CONTATO DENTAL</p>
              <h2>Escolhas diferentes para necessidades diferentes.</h2>
            </div>
            <p>A indicação não começa pelo material. Começa pela análise do caso, das expectativas e das características que queremos preservar.</p>
          </div>
          <div className="cards-grid lenses-grid">
            {lenses.map((item) => (
              <article className="editorial-card" key={item.title}>
                <img src={item.image} alt="Placeholder de caso" />
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href="#resultados">Conheça →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="section soft">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">RESULTADOS</p>
            <h2>Casos reais. Sorrisos diferentes. A mesma busca por naturalidade.</h2>
            <p>Este bloco foi pensado como portfólio editorial. Depois entraremos com os melhores antes e depois da clínica, categorizados por técnica.</p>
          </div>
          <div className="results-grid">
            <figure><img src="/placeholder-result-1.svg" alt="Resultado placeholder 1" /><figcaption>Lentes em Resina • Caso 01</figcaption></figure>
            <figure><img src="/placeholder-result-2.svg" alt="Resultado placeholder 2" /><figcaption>Lentes em Porcelana • Caso 02</figcaption></figure>
            <figure><img src="/placeholder-result-3.svg" alt="Resultado placeholder 3" /><figcaption>Retratamento • Caso 03</figcaption></figure>
          </div>
          <div className="center"><CTA label="QUERO REALIZAR UMA AVALIAÇÃO" /></div>
        </div>
      </section>

      <section id="tratamentos" className="section">
        <div className="container">
          <div className="section-heading two-col-heading">
            <div>
              <p className="eyebrow">ODONTOLOGIA COMPLETA</p>
              <h2>Além das lentes, cuidamos de cada etapa do seu sorriso.</h2>
            </div>
            <p>Os demais tratamentos aparecem como suporte ao cuidado integral, sem competir com o posicionamento principal da Bulhões em lentes de contato dental.</p>
          </div>
          <div className="treatments-list">
            {treatments.map((t, i) => <div key={t}><span>0{i + 1}</span><strong>{t}</strong><span>→</span></div>)}
          </div>
        </div>
      </section>

      <section id="equipe" className="section dark-soft">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow light">EQUIPE BULHÕES</p>
            <h2>Uma visão clínica compartilhada por diferentes especialidades.</h2>
          </div>
          <div className="team-grid">
            {['Dra. Larissa Bulhões', 'Dra. XXXXX XXXXX', 'Dra. XXXXX XXXXX', 'Dra. XXXXX XXXXX'].map((name, i) => (
              <article key={name + i}>
                <img src={`/placeholder-team-${i + 1}.svg`} alt={`Placeholder ${name}`} />
                <h3>{name}</h3>
                <p>{i === 0 ? 'Fundadora • Método Bulhões' : 'Especialidade • CRO XXXXX'}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clinica" className="section">
        <div className="container split clinic-grid">
          <div className="clinic-copy">
            <p className="eyebrow">A CLÍNICA</p>
            <h2>Uma experiência pensada nos detalhes.</h2>
            <p>Ambientes, equipe e atendimento organizados para que cada etapa seja clara, confortável e coerente com a experiência Bulhões.</p>
            <p>Depois inserimos as fotografias reais da recepção, consultórios, detalhes arquitetônicos e bastidores.</p>
            <CTA />
          </div>
          <div className="clinic-collage">
            <img src="/placeholder-clinic-1.svg" alt="Clínica placeholder 1" />
            <img src="/placeholder-clinic-2.svg" alt="Clínica placeholder 2" />
          </div>
        </div>
      </section>

      <section className="section soft" id="depoimentos">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">PACIENTES</p>
            <h2>O que fica depois do tratamento.</h2>
          </div>
          <div className="testimonial-grid">
            {[1,2,3].map((n) => (
              <blockquote key={n}>
                “Depoimento real do paciente entra aqui. Nesta fase estamos mantendo o conteúdo neutro apenas para validar hierarquia, espaçamento e experiência.”
                <footer>Paciente XXXXX • Google / Vídeo</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container faq-grid">
          <div className="faq-intro">
            <p className="eyebrow">FAQ</p>
            <h2>Dúvidas frequentes sobre lentes.</h2>
            <p>Respostas curtas, objetivas e responsáveis. Depois revisamos cada uma tecnicamente antes da publicação.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="endereco" className="section address-section">
        <div className="container split address-grid">
          <div>
            <p className="eyebrow light">ENDEREÇO</p>
            <h2>Bulhões Odontologia</h2>
            <p>Rua XXXXX, nº XXX<br/>Bairro XXXXX • Santos — SP</p>
            <p>Segunda a sexta: XXh às XXh<br/>Sábado: XXh às XXh</p>
            <p>Telefone: (13) XXXX-XXXX<br/>WhatsApp: (13) XXXXX-XXXX</p>
            <CTA label="COMO CHEGAR" />
          </div>
          <div className="map-placeholder">MAPA / GOOGLE MAPS</div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="brand footer-brand">
            <div className="brand-mark">B</div>
            <div className="brand-copy">
              <strong>BULHÕES</strong>
              <span>ODONTOLOGIA</span>
              <em>Naturalidade é o nosso maior luxo.</em>
            </div>
          </div>
          <div>
            <strong>Navegação</strong>
            <a href="#lentes">Lentes</a>
            <a href="#metodo">Método Bulhões</a>
            <a href="#resultados">Resultados</a>
            <a href="#tratamentos">Tratamentos</a>
          </div>
          <div>
            <strong>Institucional</strong>
            <a href="#equipe">Equipe</a>
            <a href="#clinica">Clínica</a>
            <a href="#faq">FAQ</a>
            <a href="#endereco">Endereço</a>
          </div>
          <div>
            <strong>Contato</strong>
            <p>WhatsApp: XXXXX</p>
            <p>Instagram: @XXXXX</p>
            <p>CRO: XXXXX</p>
          </div>
        </div>
        <div className="container footer-bottom">© 2026 Bulhões Odontologia • Política de Privacidade</div>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/55XXXXXXXXXXX" target="_blank" rel="noreferrer" aria-label="WhatsApp">✆</a>
    </main>
  )
}
