const WhatsAppIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.44 2.13 11.9c0 1.75.46 3.45 1.33 4.95L2.05 22l5.28-1.38a9.9 9.9 0 0 0 4.71 1.2h.01c5.45 0 9.89-4.44 9.89-9.9a9.84 9.84 0 0 0-2.89-7.01Zm-7 15.24h-.01a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.16 8.16 0 0 1-1.25-4.39c0-4.51 3.68-8.18 8.2-8.18a8.13 8.13 0 0 1 5.79 2.4 8.13 8.13 0 0 1 2.39 5.8c0 4.51-3.68 8.18-8.2 8.18Zm4.49-6.13c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.97-.14.16-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.16 1.75 2.67 4.24 3.75.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
  </svg>
);

const CTA = () => (
  <a
    className="cta"
    href="https://wa.me/55XXXXXXXXXXX"
    target="_blank"
    rel="noreferrer"
  >
    <WhatsAppIcon size={23} />
    <span>AGENDAR AVALIAÇÃO PERSONALIZADA</span>
  </a>
);

const Img = ({ label, className = "" }) => (
  <div className={`ph ${className}`}>
    <span>{label}</span>
  </div>
);

export default function Home() {
  const team = [
    [
      "Dra. Larissa Bulhões",
      "Fundadora • Lentes de Contato Dental",
      "CRO XXXXX",
    ],
    ["Dra. XXXXX", "Lentes de Contato Dental", "CRO XXXXX"],
    ["Dra. XXXXX", "Periodontia", "CRO XXXXX"],
    ["Dra. XXXXX", "Odontologia Clínica", "CRO XXXXX"],
  ];

  const cases = [
    ["Lentes em Resina", "DEPOIMENTO REAL DA PACIENTE"],
    ["Lentes em Porcelana", "DEPOIMENTO REAL DA PACIENTE"],
    ["Retratamento de Lentes", "DEPOIMENTO REAL DA PACIENTE"],
  ];

  return (
    <>
      <header className="header">
        <a href="#inicio" className="brand">
          <img
            src="/logo-bulhoes.png"
            alt="Símbolo Bulhões Odontologia"
            className="brandSymbol"
          />

          <div className="brandText">
            <strong>BULHÕES</strong>
            <small>ODONTOLOGIA</small>
            <em>Naturalidade é o nosso maior luxo.</em>
          </div>
        </a>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#lentes">Lentes</a>
          <a href="#metodo">Método Bulhões</a>
          <a href="#resultados">Resultados</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#equipe">Equipe</a>
          <a href="#clinica">Clínica</a>
          <a href="#endereco">Endereço</a>
        </nav>
      </header>

      <main>
        {/* BLOCO 1 — HERO */}
        <section id="inicio" className="section hero">
          <div className="heroPhoto">
            <img
              src="/hero-bulhoes.png"
              alt="Paciente Bulhões Odontologia com lentes de contato dental"
            />
          </div>

          <div className="heroCopy">
            <p className="eyebrow">
              LENTES DE CONTATO DENTAL • SANTOS
            </p>

            <h1>
              Você quer colocar lentes de contato dental, mas tem medo de
              ficar artificial?
            </h1>

            <p>
              Esse é um dos principais receios de quem pensa em colocar lentes
              de contato dental: mudar o sorriso e sentir que ele deixou de
              combinar com você.
            </p>

            <p>
              Por isso, desenvolvemos uma forma própria de planejar e construir
              cada caso: o <b>Método Bulhões</b>. Um método que parte das
              características de cada paciente para criar sorrisos com{" "}
              <b>naturalidade, elegância e sofisticação</b>, sem padronizar
              aquilo que torna cada pessoa única.
            </p>

            <CTA />
          </div>
        </section>

        {/* BLOCO 2 — AUTORIDADE */}
        <section id="lentes" className="section trust">
          <div className="trustCopy">
            <p className="eyebrow">
              LENTES DE CONTATO DENTAL
            </p>

            <h2>
              Por que tantas pessoas confiam na Bulhões Odontologia para
              transformar o sorriso?
            </h2>

            <ul className="checks">
              <li>
                Experiência em mais de 2.000 casos de lentes de contato dental
              </li>

              <li>
                Metodologia própria: Método Bulhões
              </li>

              <li>
                Acompanhamento humanizado do planejamento ao pós-procedimento
              </li>

              <li>
                Resultados naturais, planejados para aliar estética e
                durabilidade
              </li>

              <li>
                Corpo clínico multidisciplinar trabalhando de forma integrada
              </li>
            </ul>

            <CTA />
          </div>

          <div className="trustVisual">
            <Img label="PROCEDIMENTO / LENTES" />

            <div className="number">
              <b>+2.000</b>
              <span>casos de lentes realizados</span>
            </div>
          </div>
        </section>

        {/* BLOCO 3 — MÉTODO BULHÕES */}
        <section id="metodo" className="method">
          <div className="methodIntro">
            <p className="eyebrow">
              MÉTODO BULHÕES
            </p>

            <h2>
              Cada sorriso é único. Por isso, nossa avaliação é personalizada.
            </h2>

            <p>
              Através do <b>Método Bulhões</b>, nosso planejamento considera
              muito mais do que os dentes. Analisamos o sorriso em conjunto
              com as características do rosto, buscando entender a imagem que
              cada paciente deseja transmitir para construir um resultado
              verdadeiramente individual.
            </p>
          </div>

          <div className="analysisVisual">
            <Img label="FOTO FRONTAL / VISAGISMO" />

            <div className="labels">
              <div>
                <b>Cor dos olhos</b>
                <span>
                  Leitura de harmonia e características do rosto.
                </span>
              </div>

              <div>
                <b>Tom de pele</b>
                <span>
                  Considerado na composição estética do sorriso.
                </span>
              </div>

              <div>
                <b>Lábios</b>
                <span>
                  Relação entre tonalidade, volume e exposição dentária.
                </span>
              </div>

              <div>
                <b>Curvatura do sorriso</b>
                <span>
                  Proporções e desenho em relação aos lábios.
                </span>
              </div>

              <div>
                <b>Personalidade</b>
                <span>
                  O que o paciente deseja preservar ou transmitir.
                </span>
              </div>

              <div>
                <b>Objetivo do paciente</b>
                <span>
                  O que deseja mudar e o que deseja manter.
                </span>
              </div>
            </div>
          </div>

          <p className="centerLine">
            Tudo com a expertise de uma equipe que cuida do seu sorriso com
            precisão e atenção aos detalhes.
          </p>

          <div className="center">
            <CTA />
          </div>
        </section>

        {/* BLOCO 4 — RESULTADOS */}
        <section id="resultados" className="section results">
          <div className="sectionHead">
            <p className="eyebrow">
              RESULTADOS
            </p>

            <h2>
              Transformar sorrisos é transformar vidas.
            </h2>

            <p>
              Conheça alguns dos sorrisos que fazem parte da nossa história.
            </p>
          </div>

          <div className="cases">
            {cases.map(([title, quote]) => (
              <article className="case" key={title}>
                <div className="beforeAfter">
                  <Img label="ANTES" />
                  <Img label="DEPOIS" />
                </div>

                <h3>{title}</h3>

                <div className="testimonial">
                  <span>◉ @paciente</span>

                  <p>
                    “{quote} — inserir print/depoimento aqui.”
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="center">
            <CTA />
          </div>
        </section>

        {/* BLOCO 5 — EQUIPE */}
        <section id="equipe" className="section team">
          <div className="sectionHead">
            <p className="eyebrow">
              EQUIPE
            </p>

            <h2>
              Um sorriso bem planejado também é resultado de uma equipe que
              olha para o todo.
            </h2>

            <p>
              Na Bulhões, cada profissional atua dentro da sua especialidade
              para que todas as necessidades identificadas durante o
              planejamento possam ser cuidadas de forma integrada.
            </p>
          </div>

          <div className="teamGrid">
            {team.map(([name, spec, cro], index) => (
              <article key={`${name}-${index}`}>
                <Img label={`FOTO PROFISSIONAL ${index + 1}`} />

                <h3>{name}</h3>

                <p>{spec}</p>

                <small>{cro}</small>
              </article>
            ))}
          </div>

          <div className="center">
            <CTA />
          </div>
        </section>

        {/* BLOCO 6 — CLÍNICA */}
        <section id="clinica" className="clinic">
          <div className="sectionHead">
            <p className="eyebrow">
              A CLÍNICA
            </p>

            <h2>
              Uma experiência pensada nos detalhes.
            </h2>

            <p>
              Ambientes, equipe e atendimento organizados para que cada etapa
              seja clara, confortável e coerente com a experiência Bulhões.
            </p>
          </div>

          <div className="clinicGallery">
            <Img label="RECEPÇÃO" />
            <Img label="CONSULTÓRIO" />
            <Img label="DETALHES DA CLÍNICA" />
          </div>

          <div className="center">
            <CTA />
          </div>
        </section>

        {/* BLOCO 7 — TRATAMENTOS */}
        <section id="tratamentos" className="section treatments">
          <div className="sectionHead">
            <p className="eyebrow">
              OUTROS CUIDADOS
            </p>

            <h2>
              Um cuidado completo para o seu sorriso.
            </h2>

            <p>
              Além das lentes de contato dental, a Bulhões conta com um corpo
              clínico multidisciplinar para cuidar de outras necessidades
              relacionadas à saúde, função e estética.
            </p>
          </div>

          <div className="treatmentGrid">
            <article>
              <Img label="TRATAMENTOS CLÍNICOS" />

              <h3>
                Tratamentos Clínicos
              </h3>

              <p>
                Saúde, prevenção e cuidado contínuo do sorriso.
              </p>
            </article>

            <article>
              <Img label="HARMONIZAÇÃO FACIAL" />

              <h3>
                Harmonização Facial
              </h3>

              <p>
                Equilíbrio e harmonia facial com planejamento individualizado.
              </p>
            </article>

            <article>
              <Img label="IMPLANTES" />

              <h3>
                Implantes
              </h3>

              <p>
                Reabilitação do sorriso unindo função e estética.
              </p>
            </article>
          </div>

          <div className="center">
            <CTA />
          </div>
        </section>

        {/* BLOCO 8 — ENDEREÇO */}
        <section id="endereco" className="location">
          <div className="sectionHead">
            <p className="eyebrow">
              SANTOS • SP
            </p>

            <h2>
              Como chegar à Bulhões?
            </h2>

            <p>
              Bulhões Odontologia
              <br />
              <b>ENDEREÇO COMPLETO — Santos, SP</b>
            </p>
          </div>

          <div className="map">
            <div className="mapMock">
              <span>
                MAPA INTERATIVO
                <br />
                GOOGLE MAPS
              </span>

              <i>●</i>
            </div>

            <div className="routes">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
              >
                TRAÇAR ROTA NO GOOGLE MAPS
              </a>

              <a
                href="https://www.waze.com/"
                target="_blank"
                rel="noreferrer"
              >
                TRAÇAR ROTA NO WAZE
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footerBrand">
          <strong>
            BULHÕES
          </strong>

          <span>
            ODONTOLOGIA
          </span>

          <em>
            Naturalidade é o nosso maior luxo.
          </em>
        </div>

        <div>
          <b>Contato</b>

          <p>
            WhatsApp: (XX) XXXXX-XXXX
            <br />
            Instagram: @XXXXXXXX
          </p>
        </div>

        <div>
          <b>Endereço</b>

          <p>
            XXXXXXXX
            <br />
            Santos — SP
          </p>
        </div>

        <div>
          <b>Responsável técnico</b>

          <p>
            Dr(a). XXXXX
            <br />
            CRO XXXXX
          </p>
        </div>
      </footer>

      <a
        className="floatingWa"
        href="https://wa.me/55XXXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Bulhões pelo WhatsApp"
      >
        <WhatsAppIcon size={31} />
      </a>
    </>
  );
}
