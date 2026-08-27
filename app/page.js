const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    width="22"
    height="22"
    fill="currentColor"
  >
    <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.14.18 1.91 2.91 4.62 4.08.65.28 1.15.45 1.54.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32z" />
    <path d="M16.02 3C8.84 3 3 8.74 3 15.8c0 2.25.6 4.45 1.74 6.37L3 29l7.03-1.81a13.2 13.2 0 0 0 5.98 1.45h.01C23.2 28.64 29 22.9 29 15.83 29 8.76 23.2 3 16.02 3zm0 23.47h-.01a10.95 10.95 0 0 1-5.58-1.52l-.4-.24-4.17 1.08 1.11-4-.26-.41a10.54 10.54 0 0 1-1.67-5.69c0-5.86 4.92-10.63 10.98-10.63 6.05 0 10.97 4.77 10.97 10.64 0 5.86-4.92 10.77-10.97 10.77z" />
  </svg>
);

const CTA = () => (
  <a
    className="cta"
    href="https://wa.me/55XXXXXXXXXXX"
    target="_blank"
    rel="noreferrer"
  >
    <WhatsAppIcon />
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

  return (
    <>
      <header className="header">
        <a href="#inicio" className="brand">
          <img
            src="/logo-bulhoes.png"
            alt="Bulhões Odontologia"
            className="brandLogo"
          />
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
        {/* HERO */}
        <section id="inicio" className="section hero">
          <div className="heroImg imageFrame">
            <img
              src="/hero-bulhoes.png"
              alt="Resultado de lentes de contato dental na Bulhões Odontologia"
            />
          </div>

          <div className="heroCopy">
            <p className="eyebrow">LENTES DE CONTATO DENTAL • SANTOS</p>

            <h1>
              Você quer colocar lentes de contato dental, mas tem medo de ficar
              artificial?
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

        {/* CONFIANÇA */}
        <section id="lentes" className="section trust">
          <div className="trustCopy">
            <p className="eyebrow">LENTES DE CONTATO DENTAL</p>

            <h2>
              Por que tantas pessoas confiam na Bulhões Odontologia para
              transformar o sorriso?
            </h2>

            <ul className="checks">
              <li>
                Experiência em mais de 2.000 casos de lentes de contato dental
              </li>
              <li>Metodologia própria: Método Bulhões</li>
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

        {/* MÉTODO BULHÕES */}
        <section id="metodo" className="method">
          <div className="methodIntro">
            <p className="eyebrow">MÉTODO BULHÕES</p>

            <h2>
              Cada sorriso é único. Por isso, nossa avaliação é personalizada.
            </h2>

            <p>
              Através do <b>Método Bulhões</b>, nosso planejamento considera
              muito mais do que os dentes. Analisamos o sorriso em conjunto com
              as características do rosto, buscando entender a imagem que cada
              paciente deseja transmitir para construir um resultado
              verdadeiramente individual.
            </p>
          </div>

          <div className="analysisVisual">
            <Img label="FOTO FRONTAL / VISAGISMO" />

            <div className="labels">
              <div>
                <b>Cor dos olhos</b>
                <span>Leitura de harmonia e características do rosto.</span>
              </div>

              <div>
                <b>Tom de pele</b>
                <span>Considerado na composição estética do sorriso.</span>
              </div>

              <div>
                <b>Lábios</b>
                <span>
                  Relação entre tonalidade, volume e exposição dentária.
                </span>
              </div>

              <div>
                <b>Curvatura do sorriso</b>
                <span>Proporções e desenho em relação aos lábios.</span>
              </div>

              <div>
                <b>Personalidade</b>
                <span>
                  O que o paciente deseja preservar ou transmitir.
                </span>
              </div>

              <div>
                <b>Objetivo do paciente</b>
                <span>O que deseja mudar e o que deseja manter.</span>
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

        {/* RESULTADOS */}
        <section id="resultados" className="section results">
          <div className="sectionHead">
            <p className="eyebrow">RESULTADOS</p>

            <h2>Transformar sorrisos é transformar vidas.</h2>

            <p>
              Conheça alguns dos sorrisos que fazem parte da nossa história.
            </p>
          </div>

          <div className="cases">
            <article className="case">
              <div className="beforeAfter">
                <Img label="ANTES" />
                <Img label="DEPOIS" />
              </div>

              <h3>Lentes em Resina</h3>

              <div className="testimonial">
                <span>◉ @paciente</span>
                <p>
                  “DEPOIMENTO REAL DA PACIENTE — inserir print/depoimento
                  aqui.”
                </p>
              </div>
            </article>

            <article className="case">
              <div className="beforeAfter">
                <Img label="ANTES" />
                <Img label="DEPOIS" />
              </div>

              <h3>Lentes em Porcelana</h3>

              <div className="testimonial">
                <span>◉ @paciente</span>
                <p>
                  “DEPOIMENTO REAL DA PACIENTE — inserir print/depoimento
                  aqui.”
                </p>
              </div>
            </article>

            <article className="case">
              <div className="beforeAfter">
                <Img label="ANTES" />
                <Img label="DEPOIS" />
              </div>

              <h3>Retratamento de Lentes</h3>

              <div className="testimonial">
                <span>◉ @paciente</span>
                <p>
                  “DEPOIMENTO REAL DA PACIENTE — inserir print/depoimento
                  aqui.”
                </p>
              </div>
            </article>
          </div>

          <div className="center">
            <CTA />
          </div>
        </section>

        {/* EQUIPE */}
        <section id="equipe" className="section team">
          <div className="sectionHead">
            <p className="eyebrow">EQUIPE</p>

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
            {team.map(([name, spec, cro], i) => (
              <article key={i}>
                <Img label={`FOTO PROFISSIONAL ${i + 1}`} />

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

        {/* CLÍNICA */}
        <section id="clinica" className="clinic">
          <div className="sectionHead">
            <p className="eyebrow">A CLÍNICA</p>

            <h2>Uma experiência pensada nos detalhes.</h2>

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

        {/* TRATAMENTOS */}
        <section id="tratamentos" className="section treatments">
          <div className="sectionHead">
            <p className="eyebrow">OUTROS CUIDADOS</p>

            <h2>Um cuidado completo para o seu sorriso.</h2>

            <p>
              Além das lentes de contato dental, a Bulhões conta com um corpo
              clínico multidisciplinar para cuidar de outras necessidades
              relacionadas à saúde, função e estética.
            </p>
          </div>

          <div className="treatmentGrid">
            <article>
              <Img label="TRATAMENTOS CLÍNICOS" />

              <h3>Tratamentos Clínicos</h3>

              <p>Saúde, prevenção e cuidado contínuo do sorriso.</p>
            </article>

            <article>
              <div className="treatmentImage imageFrame">
                <img
                  src="/harmonizacao-facial.PNG"
                  alt="Antes e depois de harmonização facial na Bulhões Odontologia"
                />
              </div>

              <h3>Harmonização Facial</h3>

              <p>
                Equilíbrio e harmonia facial com planejamento individualizado.
              </p>
            </article>

            <article>
              <Img label="IMPLANTES" />

              <h3>Implantes</h3>

              <p>Reabilitação do sorriso unindo função e estética.</p>
            </article>
          </div>

          <div className="center">
            <CTA />
          </div>
        </section>

        {/* ENDEREÇO */}
        <section id="endereco" className="location">
          <div className="sectionHead">
            <p className="eyebrow">SANTOS • SP</p>

            <h2>Como chegar à Bulhões?</h2>

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
                href="https://maps.google.com/"
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

      {/* FOOTER */}
      <footer>
        <div className="footerBrand">
          <strong>BULHÕES</strong>
          <span>ODONTOLOGIA</span>
          <em>Naturalidade é o nosso maior luxo.</em>
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

      {/* WHATSAPP FLUTUANTE */}
      <a
        className="floatingWa"
        href="https://wa.me/55XXXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
