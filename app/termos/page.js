export const metadata = {
  title: "Termos de Uso",
  description:
    "Condições de uso do site e dos canais de atendimento da Bulhões Odontologia.",
  alternates: { canonical: "/termos" },
};

const EMAIL = "bulhoesodontologia@gmail.com";

export default function Termos() {
  return (
    <main className="legal">
      <a className="legalTopo" href="/">
        BULHÕES
        <span>ODONTOLOGIA</span>
      </a>

      <h1>Termos de Uso</h1>
      <p className="legalData">Última atualização: 21 de outubro de 2026</p>

      <p>
        Estes termos valem para o site bulhoesodontologia.com.br e para os canais de
        atendimento da Bulhões Odontologia (CLÍNICA ODONTOLÓGICA L B LTDA, CNPJ
        32.562.206/0001-00), incluindo o WhatsApp. Ao usar esses canais, você concorda com
        as condições abaixo.
      </p>

      <h2>1. Informações do site e das conversas</h2>
      <p>
        O conteúdo do site e as respostas pelo WhatsApp têm caráter informativo. Eles não
        substituem a avaliação clínica. A indicação de tratamento, o material, a quantidade de
        dentes, os prazos e os valores só são definidos depois da avaliação presencial com o
        dentista responsável.
      </p>

      <h2>2. Atendimento pelo WhatsApp</h2>
      <ul>
        <li>
          O atendimento acontece em horário comercial. Mensagens recebidas fora desse horário
          são respondidas no próximo período de atendimento.
        </li>
        <li>
          Para sua segurança, não envie senhas ou dados de cartão pelo WhatsApp. A clínica
          nunca pede esse tipo de informação por mensagem.
        </li>
        <li>
          Em caso de urgência odontológica fora do horário de atendimento, procure um
          pronto-atendimento.
        </li>
        <li>
          Podemos enviar lembretes de consulta e, quando você autorizar, comunicações sobre a
          clínica. Para não receber mais comunicações, basta pedir pelo próprio WhatsApp.
        </li>
      </ul>

      <h2>3. Agendamentos</h2>
      <p>
        Pedimos que avise com antecedência caso precise remarcar ou cancelar um horário, para
        que ele possa ser oferecido a outro paciente.
      </p>

      <h2>4. Imagens e conteúdo</h2>
      <p>
        Textos, fotos e marcas do site pertencem à Bulhões Odontologia e não podem ser
        reproduzidos sem autorização. Imagens de pacientes são publicadas somente com
        autorização por escrito.
      </p>

      <h2>5. Privacidade</h2>
      <p>
        O tratamento dos seus dados pessoais segue a nossa{" "}
        <a href="/privacidade">Política de Privacidade</a>.
      </p>

      <h2>6. Contato</h2>
      <p>
        Dúvidas sobre estes termos podem ser enviadas para{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>

      <p style={{ marginTop: 40 }}>
        <a href="/privacidade">Política de Privacidade</a> · <a href="/">Voltar ao site</a>
      </p>
    </main>
  );
}
