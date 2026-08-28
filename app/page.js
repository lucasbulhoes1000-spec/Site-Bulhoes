"use client";

import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5513996300176";
const INSTAGRAM_URL = "https://www.instagram.com/bulhoesodontologia/";

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
    href={WHATSAPP_URL}
    target="_blank"
    rel="noreferrer"
  >
    <WhatsAppIcon size={23} />
    <span>AGENDAR AVALIAÇÃO PERSONALIZADA</span>
  </a>
);

function FallbackImage({ sources, alt, className = "" }) {
  const [index, setIndex] = useState(0);

  return (
    <img
      src={sources[index]}
      alt={alt}
      className={className}
      onError={() => {
        if (index < sources.length - 1) {
          setIndex((current) => current + 1);
        }
      }}
    />
  );
}

export default function Home() {
  const heroImages = [
    "/hero-bulhoes.png",
    "/cenatti.jpg",
    "/carol.jpg",
    "/maya.jpeg",
    "/beatriz.jpeg",
    "/maya2.jpeg",
    "/robson.JPG",
    "/jac.jpeg",
    "/andressa.jpeg",
    "/antesdepoisfrente.jpeg",
    "/antesdepoislado.jpeg",
    "/barbara.jpeg",
    "/barbara2.jpeg",
    "/acho.jpeg",
    "/outrocaso.jpeg",
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  const heroPrevious = () => {
    setHeroIndex((current) =>
      current === 0 ? heroImages.length - 1 : current - 1
    );
  };

  const heroNext = () => {
    setHeroIndex((current) =>
      current === heroImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <header className="header">
        <a href="#inicio" className="brand">
          <img
            src="/logo-bulhoes.png"
            alt="Bulhões Odontologia"
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
        {/* HERO */}
        <section id="inicio" className="section hero">
          <div className="heroCarousel">
            <div className="heroPhoto">
              <img
                key={heroImages[heroIndex]}
                src={heroImages[heroIndex]}
                alt={`Caso de lentes de contato dental ${heroIndex + 1}`}
              />
            </div>

            <button
              type="button"
              className="heroArrow heroArrowLeft"
              onClick={heroPrevious}
              aria-label="Ver caso anterior"
            >
              ‹
            </button>

            <button
              type="button"
              className="heroArrow heroArrowRight"
              onClick={heroNext}
              aria-label="Ver próximo caso"
            >
              ›
            </button>

            <div className="heroDots">
              {heroImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  className={`heroDot ${
                    heroIndex === index ? "heroDotActive" : ""
                  }`}
                  onClick={() => setHeroIndex(index)}
                  aria-label={`Ver caso ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="heroCopy">
            <p className="eyebrow">
              LENTES DE CONTATO DENTAL • SANTOS
            </p>

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

        {/* LENTES */}
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
            <div className="trustPhoto">
              <img
                src="/carol.jpg"
                alt="Procedimento de lentes de contato dental"
              />
            </div>

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

          <div className="visagismStage">
            <div className="visagismPhoto">
              <img
                src="/estela.JPG"
                alt="Análise personalizada do sorriso pelo Método Bulhões"
              />
            </div>

            <div className="visagismCards">
              <div className="visagismCard">
                <b>Cor dos olhos</b>
                <span>
                  Leitura de harmonia e características do rosto.
                </span>
              </div>

              <div className="visagismCard">
                <b>Tom de pele</b>
                <span>
                  Considerado na composição estética do sorriso.
                </span>
              </div>

              <div className="visagismCard">
                <b>Lábios</b>
                <span>
                  Relação entre tonalidade, volume e exposição dentária.
                </span>
              </div>

              <div className="visagismCard">
                <b>Curvatura do sorriso</b>
                <span>
                  Proporções e desenho em relação aos lábios.
                </span>
              </div>

              <div className="visagismCard conceptualCard">
                <b>Personalidade</b>
                <span>
                  O que o paciente deseja preservar ou transmitir.
                </span>
              </div>

              <div className="visagismCard conceptualCard">
                <b>Objetivo do paciente</b>
                <span>
                  O que deseja mudar e o que deseja manter.
                </span>
              </div>
            </div>

            <svg
              className="visagismLines"
              viewBox="0 0 1200 650"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="whiteArrow"
                  markerWidth="11"
                  markerHeight="11"
                  refX="8"
                  refY="5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path
                    d="M 0 0 L 10 5 L 0 10 z"
                    fill="#ffffff"
                  />
                </marker>
              </defs>

              {/* COR DOS OLHOS -> ÍRIS */}
              <polyline
                points="760,79 695,79 515,211"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd="url(#whiteArrow)"
              />

              {/* TOM DE PELE -> BOCHECHA */}
              <polyline
                points="760,181 690,181 540,306"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd="url(#whiteArrow)"
              />

              {/* LÁBIOS -> LÁBIOS */}
              <polyline
                points="760,283 685,283 460,397"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd="url(#whiteArrow)"
              />

              {/* CURVATURA DO SORRISO -> ARCO DO SORRISO */}
              <polyline
                points="760,385 682,385 505,420"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd="url(#whiteArrow)"
              />
            </svg>
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

            <h2>
              Transformar sorrisos é transformar vidas.
            </h2>

            <p>
              Conheça alguns dos sorrisos que fazem parte da nossa história.
            </p>
          </div>

          <div className="cases">
            <article className="case">
              <div className="beforeAfter">
                <div className="casePhoto">
                  <FallbackImage
                    sources={[
                      "/antes-resina.JPG",
                      "/antes-resina.jpg",
                      "/Antes-resina.JPG",
                    ]}
                    alt="Antes das lentes em resina"
                  />
                </div>

                <div className="casePhoto">
                  <FallbackImage
                    sources={[
                      "/depois-resina.JPG",
                      "/depois-resina.jpg",
                    ]}
                    alt="Depois das lentes em resina"
                  />
                </div>
              </div>

              <h3>Lentes em Resina</h3>

              <div className="testimonialImage">
                <img
                  src="/depoimento1.png"
                  alt="Depoimento de paciente"
                />
              </div>
            </article>

            <article className="case">
              <div className="beforeAfter">
                <div className="casePhoto">
                  <img
                    src="/antes-porcelana.JPG"
                    alt="Antes das lentes em porcelana"
                  />
                </div>

                <div className="casePhoto">
                  <img
                    src="/depois-porcelana.JPG"
                    alt="Depois das lentes em porcelana"
                  />
                </div>
              </div>

              <h3>Lentes em Porcelana</h3>

              <div className="testimonialImage">
                <img
                  src="/depoimento2.png"
                  alt="Depoimento de paciente"
                />
              </div>
            </article>

            <article className="case">
              <div className="beforeAfter">
                <div className="casePhoto">
                  <img
                    src="/resultado-retratamento-antes.JPG"
                    alt="Antes do retratamento de lentes"
                  />
                </div>

                <div className="casePhoto">
                  <img
                    src="/resultado-retratamento-depois.JPG"
                    alt="Depois do retratamento de lentes"
                  />
                </div>
              </div>

              <h3>Retratamento de Lentes</h3>

              <div className="testimonialImage">
                <img
                  src="/depoimento3.png"
                  alt="Depoimento de paciente"
                />
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
            <article className="teamCard">
              <div className="teamPhoto">
                <img
                  src="/dralarissa.JPG"
                  alt="Dra. Larissa Bulhões"
                  className="teamZoomLarissa"
                />
              </div>

              <h3>Dra. Larissa Bulhões</h3>

              <p>
                Fundadora • Lentes de Contato Dental
              </p>

              <small>CRO XXXXX</small>
            </article>

            <article className="teamCard">
              <div className="teamPhoto">
                <img
                  src="/dragabi.jpeg"
                  alt="Dra. Gabriela Vera"
                  className="teamZoomGabi"
                />
              </div>

              <h3>Dra. Gabriela Vera</h3>

              <p>
                Periodontia • Harmonização Facial
              </p>

              <small>CRO XXXXX</small>
            </article>

            <article className="teamCard">
              <div className="teamPhoto">
                <img
                  src="/christycerta.jpg"
                  alt="Dra. Christy Ohara"
                  className="teamZoomChristy"
                />
              </div>

              <h3>Dra. Christy Ohara</h3>

              <p>Lentes de Contato Dental</p>

              <small>CRO XXXXX</small>
            </article>

            <article className="teamCard">
              <div className="teamPhoto">
                <img
                  src="/dralethicia.jpeg"
                  alt="Dra. Lethicia"
                  className="teamZoomLethicia"
                />
              </div>

              <h3>Dra. Lethicia</h3>

              <p>Odontologia Clínica</p>

              <small>CRO XXXXX</small>
            </article>
          </div>

          <div className="center">
            <CTA />
          </div>
        </section>

        {/* CLÍNICA */}
        <section id="clinica" className="clinic">
          <div className="sectionHead">
            <p className="eyebrow">A CLÍNICA</p>

            <h2>
              Uma experiência pensada nos detalhes.
            </h2>

            <p>
              Ambientes, equipe e atendimento organizados para que cada etapa
              seja clara, confortável e coerente com a experiência Bulhões.
            </p>
          </div>

          <div className="clinicGallery">
            <div className="clinicPhoto clinicPhotoMain">
              <img
                src="/recepcao.webp"
                alt="Recepção da Bulhões Odontologia"
              />

              <span>RECEPÇÃO</span>
            </div>

            <div className="clinicPhoto">
              <img
                src="/consultorio.jpeg"
                alt="Consultório da Bulhões Odontologia"
              />

              <span>CONSULTÓRIO</span>
            </div>

            <div className="clinicPhoto">
              <img
                src="/detalhes.webp"
                alt="Detalhes da Bulhões Odontologia"
              />

              <span>DETALHES</span>
            </div>
          </div>

          <div className="center">
            <CTA />
          </div>
        </section>

        {/* TRATAMENTOS */}
        <section id="tratamentos" className="section treatments">
          <div className="sectionHead">
            <p className="eyebrow">OUTROS CUIDADOS</p>

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
              <div className="treatmentPhoto">
                <img
                  src="/tratamentoclinico.jpg"
                  alt="Tratamentos clínicos"
                />
              </div>

              <h3>Tratamentos Clínicos</h3>

              <p>
                Saúde, prevenção e cuidado contínuo do sorriso.
              </p>
            </article>

            <article>
              <div className="treatmentPhoto">
                <img
                  src="/harmonizacao-facial.PNG"
                  alt="Harmonização facial"
                />
              </div>

              <h3>Harmonização Facial</h3>

              <p>
                Equilíbrio e harmonia facial com planejamento individualizado.
              </p>
            </article>

            <article>
              <div className="treatmentPhoto">
                <img
                  src="/Implantes.JPG"
                  alt="Implantes dentários"
                />
              </div>

              <h3>Implantes</h3>

              <p>
                Reabilitação do sorriso unindo função e estética.
              </p>
            </article>
          </div>

          <div className="center">
            <CTA />
          </div>
        </section>

        {/* ENDEREÇO */}
        <section id="endereco" className="location">
          <div className="sectionHead locationHead">
            <p className="eyebrow">SANTOS • SP</p>

            <h2>
              Como chegar à Bulhões?
            </h2>

            <p>
              <b>Bulhões Odontologia</b>
              <br />
              Avenida Senador Feijó, 686
              <br />
              Sala 923
              <br />
              Vila Matias • Santos/SP
              <br />
              CEP 11015-504
            </p>
          </div>

          <div className="mapArea">
            <div className="mapFrameWrapper">
              <iframe
                className="mapFrame"
                src="https://www.google.com/maps?q=Avenida+Senador+Feij%C3%B3,+686,+Vila+Matias,+Santos,+SP,+11015-504&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Bulhões Odontologia"
              />
            </div>

            <div className="routes">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Avenida+Senador+Feij%C3%B3,+686,+Vila+Matias,+Santos,+SP,+11015-504"
                target="_blank"
                rel="noreferrer"
              >
                TRAÇAR ROTA NO GOOGLE MAPS
              </a>

              <a
                href="https://www.waze.com/ul?q=Avenida%20Senador%20Feij%C3%B3%2C%20686%2C%20Vila%20Matias%2C%20Santos%2C%20SP%2C%2011015-504&navigate=yes"
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
          <strong>BULHÕES</strong>
          <span>ODONTOLOGIA</span>
          <em>Naturalidade é o nosso maior luxo.</em>
        </div>

        <div>
          <b>Contato</b>

          <p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="footerLink"
            >
              WhatsApp: (13) 99630-0176
            </a>

            <br />

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="footerLink"
            >
              Instagram: @bulhoesodontologia
            </a>
          </p>
        </div>

        <div>
          <b>Endereço</b>

          <p>
            Avenida Senador Feijó, 686
            <br />
            Sala 923
            <br />
            Vila Matias • Santos/SP
            <br />
            CEP 11015-504
          </p>
        </div>
      </footer>

      <a
        className="floatingWa"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Bulhões pelo WhatsApp"
      >
        <WhatsAppIcon size={31} />
      </a>
    </>
  );
}
