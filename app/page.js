const CTA = () => (
  <a className="cta" href="https://wa.me/55XXXXXXXXXXX" target="_blank" rel="noreferrer">
    <span className="wa">◔</span> AGENDAR AVALIAÇÃO PERSONALIZADA
  </a>
);

const Img = ({label, className=""}) => <div className={`ph ${className}`}><span>{label}</span></div>;

export default function Home() {
  const team = [
    ["Dra. Larissa Bulhões", "Fundadora • Lentes de Contato Dental", "CRO XXXXX"],
    ["Dra. XXXXX", "Lentes de Contato Dental", "CRO XXXXX"],
    ["Dra. XXXXX", "Periodontia", "CRO XXXXX"],
    ["Dra. XXXXX", "Odontologia Clínica", "CRO XXXXX"]
  ];
  return (
    <>
      <header className="header">
        <a href="#inicio" className="brand">
          <div className="mark">B</div>
          <div><strong>BULHÕES</strong><small>ODONTOLOGIA</small><em>Naturalidade é o nosso maior luxo.</em></div>
        </a>
        <nav>
          <a href="#inicio">Início</a><a href="#lentes">Lentes</a><a href="#metodo">Método Bulhões</a>
          <a href="#resultados">Resultados</a><a href="#tratamentos">Tratamentos</a>
          <a href="#equipe">Equipe</a><a href="#clinica">Clínica</a><a href="#endereco">Endereço</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="section hero">
          <Img label="PACIENTE / HERO" className="heroImg"/>
          <div className="heroCopy">
            <p className="eyebrow">LENTES DE CONTATO DENTAL • SANTOS</p>
            <h1>Você quer colocar lentes de contato dental, mas tem medo de ficar artificial?</h1>
            <p>Esse é um dos principais receios de quem pensa em colocar lentes de contato dental: mudar o sorriso e sentir que ele deixou de combinar com você.</p>
            <p>Por isso, desenvolvemos uma forma própria de planejar e construir cada caso: o <b>Método Bulhões</b>. Um método que parte das características de cada paciente para criar sorrisos com <b>naturalidade, elegância e sofisticação</b>, sem padronizar aquilo que torna cada pessoa única.</p>
            <CTA/>
          </div>
        </section>

        <section id="lentes" className="section trust">
          <div className="trustCopy">
            <p className="eyebrow">LENTES DE CONTATO DENTAL</p>
            <h2>Por que tantas pessoas confiam na Bulhões Odontologia para transformar o sorriso?</h2>
            <ul className="checks">
              <li>Experiência em mais de 2.000 casos de lentes de contato dental</li>
              <li>Metodologia própria: Método Bulhões</li>
              <li>Acompanhamento humanizado do planejamento ao pós-procedimento</li>
              <li>Resultados naturais, planejados para aliar estética e durabilidade</li>
              <li>Corpo clínico multidisciplinar trabalhando de forma integrada</li>
            </ul>
            <CTA/>
          </div>
          <div className="trustVisual">
            <Img label="PROCEDIMENTO / LENTES"/>
            <div className="number"><b>+2.000</b><span>casos de lentes realizados</span></div>
          </div>
        </section>

        <section id="metodo" className="method">
          <div className="methodIntro">
            <p className="eyebrow">MÉTODO BULHÕES</p>
            <h2>Cada sorriso é único. Por isso, nossa avaliação é personalizada.</h2>
            <p>Através do <b>Método Bulhões</b>, nosso planejamento considera muito mais do que os dentes. Analisamos o sorriso em conjunto com as características do rosto, buscando entender a imagem que cada paciente deseja transmitir para construir um resultado verdadeiramente individual.</p>
          </div>
          <div className="analysisVisual">
            <Img label="FOTO FRONTAL / VISAGISMO"/>
            <div className="labels">
              <div><b>Cor dos olhos</b><span>Leitura de harmonia e características do rosto.</span></div>
              <div><b>Tom de pele</b><span>Considerado na composição estética do sorriso.</span></div>
              <div><b>Lábios</b><span>Relação entre tonalidade, volume e exposição dentária.</span></div>
              <div><b>Curvatura do sorriso</b><span>Proporções e desenho em relação aos lábios.</span></div>
              <div><b>Personalidade</b><span>O que o paciente deseja preservar ou transmitir.</span></div>
              <div><b>Objetivo do paciente</b><span>O que deseja mudar e o que deseja manter.</span></div>
            </div>
          </div>
          <p className="centerLine">Tudo com a expertise de uma equipe que cuida do seu sorriso com precisão e atenção aos detalhes.</p>
          <div className="center"><CTA/></div>
        </section>

        <section id="resultados" className="section results">
          <div className="sectionHead">
            <p className="eyebrow">RESULTADOS</p>
            <h2>Transformar sorrisos é transformar vidas.</h2>
            <p>Conheça alguns dos sorrisos que fazem parte da nossa história.</p>
          </div>
          <div className="cases">
            {[
              ["Lentes em Resina","DEPOIMENTO REAL DA PACIENTE"],
              ["Lentes em Porcelana","DEPOIMENTO REAL DA PACIENTE"],
              ["Retratamento de Lentes","DEPOIMENTO REAL DA PACIENTE"]
            ].map(([title,quote],i)=><article className="case" key={title}>
              <div className="beforeAfter"><Img label="ANTES"/><Img label="DEPOIS"/></div>
              <h3>{title}</h3>
              <div className="testimonial"><span>◉ @paciente</span><p>“{quote} — inserir print/depoimento aqui.”</p></div>
            </article>)}
          </div>
          <div className="center"><CTA/></div>
        </section>

        <section id="equipe" className="section team">
          <div className="sectionHead">
            <p className="eyebrow">EQUIPE</p>
            <h2>Um sorriso bem planejado também é resultado de uma equipe que olha para o todo.</h2>
            <p>Na Bulhões, cada profissional atua dentro da sua especialidade para que todas as necessidades identificadas durante o planejamento possam ser cuidadas de forma integrada.</p>
          </div>
          <div className="teamGrid">
            {team.map(([name,spec,cro],i)=><article key={i}><Img label={`FOTO PROFISSIONAL ${i+1}`}/><h3>{name}</h3><p>{spec}</p><small>{cro}</small></article>)}
          </div>
          <div className="center"><CTA/></div>
        </section>

        <section id="clinica" className="clinic">
          <div className="sectionHead">
            <p className="eyebrow">A CLÍNICA</p>
            <h2>Uma experiência pensada nos detalhes.</h2>
            <p>Ambientes, equipe e atendimento organizados para que cada etapa seja clara, confortável e coerente com a experiência Bulhões.</p>
          </div>
          <div className="clinicGallery"><Img label="RECEPÇÃO"/><Img label="CONSULTÓRIO"/><Img label="DETALHES DA CLÍNICA"/></div>
          <div className="center"><CTA/></div>
        </section>

        <section id="tratamentos" className="section treatments">
          <div className="sectionHead">
            <p className="eyebrow">OUTROS CUIDADOS</p>
            <h2>Um cuidado completo para o seu sorriso.</h2>
            <p>Além das lentes de contato dental, a Bulhões conta com um corpo clínico multidisciplinar para cuidar de outras necessidades relacionadas à saúde, função e estética.</p>
          </div>
          <div className="treatmentGrid">
            <article><Img label="TRATAMENTOS CLÍNICOS"/><h3>Tratamentos Clínicos</h3><p>Saúde, prevenção e cuidado contínuo do sorriso.</p></article>
            <article><Img label="HARMONIZAÇÃO FACIAL"/><h3>Harmonização Facial</h3><p>Equilíbrio e harmonia facial com planejamento individualizado.</p></article>
            <article><Img label="IMPLANTES"/><h3>Implantes</h3><p>Reabilitação do sorriso unindo função e estética.</p></article>
          </div>
          <div className="center"><CTA/></div>
        </section>

        <section id="endereco" className="location">
          <div className="sectionHead">
            <p className="eyebrow">SANTOS • SP</p>
            <h2>Como chegar à Bulhões?</h2>
            <p>Bulhões Odontologia<br/><b>ENDEREÇO COMPLETO — Santos, SP</b></p>
          </div>
          <div className="map">
            <div className="mapMock"><span>MAPA INTERATIVO<br/>GOOGLE MAPS</span><i>●</i></div>
            <div className="routes">
              <a href="#" onClick={(e)=>e.preventDefault()}>TRAÇAR ROTA NO GOOGLE MAPS</a>
              <a href="#" onClick={(e)=>e.preventDefault()}>TRAÇAR ROTA NO WAZE</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footerBrand"><strong>BULHÕES</strong><span>ODONTOLOGIA</span><em>Naturalidade é o nosso maior luxo.</em></div>
        <div><b>Contato</b><p>WhatsApp: (XX) XXXXX-XXXX<br/>Instagram: @XXXXXXXX</p></div>
        <div><b>Endereço</b><p>XXXXXXXX<br/>Santos — SP</p></div>
        <div><b>Responsável técnico</b><p>Dr(a). XXXXX<br/>CRO XXXXX</p></div>
      </footer>
      <a className="floatingWa" href="https://wa.me/55XXXXXXXXXXX" target="_blank" rel="noreferrer" aria-label="WhatsApp">◔</a>
    </>
  );
}
