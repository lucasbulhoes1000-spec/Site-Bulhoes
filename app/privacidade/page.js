export const metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Bulhões Odontologia coleta, usa, guarda e protege os seus dados pessoais, de acordo com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

const EMAIL = "bulhoesodontologia@gmail.com";
const WHATSAPP = "https://wa.me/5513996300176";

export default function Privacidade() {
  return (
    <main className="legal">
      <a className="legalTopo" href="/">
        BULHÕES
        <span>ODONTOLOGIA</span>
      </a>

      <h1>Política de Privacidade</h1>
      <p className="legalData">Última atualização: 21 de outubro de 2026</p>

      <p>
        A Bulhões Odontologia (CLÍNICA ODONTOLÓGICA L B LTDA, CNPJ 32.562.206/0001-00,
        Avenida Senador Feijó, 686, Sala 923, Vila Mathias, Santos/SP, CEP 11015-504) respeita a
        sua privacidade. Esta política explica quais dados pessoais tratamos quando você
        fala com a gente pelo WhatsApp, preenche um formulário, visita o nosso site ou é
        atendido na clínica, por que tratamos esses dados e quais são os seus direitos,
        conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, a LGPD).
      </p>

      <h2>1. Quais dados coletamos</h2>
      <ul>
        <li>
          <b>Dados de contato:</b> nome, telefone, e-mail e o nome do seu perfil no WhatsApp.
        </li>
        <li>
          <b>Conversas pelo WhatsApp:</b> as mensagens, fotos, áudios, vídeos e documentos que
          você envia para os números da clínica e as respostas da nossa equipe.
        </li>
        <li>
          <b>Dados de agendamento e atendimento:</b> datas de avaliação e consultas,
          orçamentos e o histórico do seu tratamento.
        </li>
        <li>
          <b>Dados de saúde:</b> informações clínicas, fotografias e exames necessários para
          avaliar e realizar o tratamento. Esses dados são sensíveis e recebem cuidado
          redobrado.
        </li>
        <li>
          <b>Origem do contato:</b> quando você chega até nós por um anúncio no Facebook ou no
          Instagram, recebemos da Meta a identificação do anúncio e da campanha.
        </li>
        <li>
          <b>Navegação no site:</b> dados de uso coletados pelo Google Analytics, como páginas
          visitadas e tipo de dispositivo.
        </li>
      </ul>

      <h2>2. Para que usamos os seus dados</h2>
      <ul>
        <li>Responder às suas dúvidas e fazer o atendimento pelo WhatsApp.</li>
        <li>Agendar, confirmar e lembrar avaliações e consultas.</li>
        <li>Planejar e realizar o seu tratamento e manter o prontuário odontológico.</li>
        <li>Enviar orçamentos e acompanhar o seu pós-tratamento e as manutenções.</li>
        <li>
          Enviar comunicações sobre a clínica, como novidades e condições especiais, quando
          você tiver autorizado. Você pode pedir para não receber mais a qualquer momento.
        </li>
        <li>Medir os resultados das nossas campanhas e melhorar o atendimento.</li>
        <li>Cumprir obrigações legais e regulatórias da odontologia.</li>
      </ul>

      <h2>3. Bases legais</h2>
      <p>
        Tratamos os seus dados com base na execução do atendimento e do contrato de
        tratamento que você solicitou, no cumprimento de obrigações legais (por exemplo, a
        guarda do prontuário), na tutela da saúde para os dados de saúde, no nosso legítimo
        interesse em organizar o atendimento e medir campanhas, e no seu consentimento para
        comunicações de marketing.
      </p>

      <h2>4. Com quem compartilhamos</h2>
      <p>
        Não vendemos os seus dados. Compartilhamos somente o necessário com empresas que nos
        ajudam a prestar o serviço, que tratam os dados conforme as nossas instruções:
      </p>
      <ul>
        <li>Meta (WhatsApp, Facebook e Instagram), para a troca de mensagens e os anúncios.</li>
        <li>Supabase, Google e Vercel, para armazenar e operar o nosso sistema de atendimento.</li>
        <li>O sistema de gestão da clínica, para agenda e prontuário.</li>
        <li>Laboratórios de prótese, quando o tratamento exigir.</li>
        <li>Autoridades públicas, quando houver obrigação legal ou ordem judicial.</li>
      </ul>
      <p>
        Alguns desses fornecedores podem armazenar dados fora do Brasil. Nesses casos,
        exigimos garantias de proteção compatíveis com a LGPD.
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <p>
        Guardamos os dados pelo tempo necessário para as finalidades acima. O prontuário
        odontológico é mantido pelo prazo mínimo exigido em lei (20 anos, conforme a Lei nº
        13.787/2018). Conversas e dados de contato de quem não se tornou paciente podem ser
        excluídos a pedido, a qualquer momento.
      </p>

      <h2>6. Como protegemos</h2>
      <p>
        O acesso ao nosso sistema é feito com login individual e restrito à equipe que
        precisa da informação para o atendimento. Fotos e arquivos enviados pelo WhatsApp
        ficam em armazenamento privado, e as conexões são criptografadas.
      </p>

      <h2>7. Os seus direitos</h2>
      <p>Você pode, a qualquer momento:</p>
      <ul>
        <li>Confirmar se tratamos os seus dados e pedir uma cópia deles.</li>
        <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
        <li>Pedir a exclusão, o bloqueio ou a anonimização de dados desnecessários.</li>
        <li>Revogar o consentimento para mensagens de marketing.</li>
        <li>Pedir informações sobre com quem compartilhamos os seus dados.</li>
        <li>Pedir a portabilidade dos dados a outro fornecedor.</li>
        <li>Apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).</li>
      </ul>

      <h2 id="exclusao">8. Como pedir a exclusão dos seus dados</h2>
      <div className="legalCaixa">
        <p style={{ marginTop: 0 }}>
          Envie um pedido por e-mail para <a href={`mailto:${EMAIL}`}>{EMAIL}</a> ou pelo
          WhatsApp da clínica (<a href={WHATSAPP}>(13) 99630-0176</a>), informando o seu nome
          e o telefone usado nas conversas.
        </p>
        <p style={{ marginBottom: 0 }}>
          Confirmamos o recebimento e respondemos em até 15 dias. Excluímos as conversas e os
          dados de contato. Os dados que a lei nos obriga a guardar, como o prontuário de
          quem já foi paciente, são mantidos pelo prazo legal e depois eliminados.
        </p>
      </div>

      <h2>9. Contato e encarregado de dados</h2>
      <p>
        Para qualquer dúvida sobre esta política ou sobre os seus dados, fale com o
        encarregado de dados da Bulhões Odontologia, Lucas Bulhões, pelo e-mail{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>

      <h2>10. Atualizações</h2>
      <p>
        Esta política pode ser atualizada para refletir mudanças na lei ou no nosso
        atendimento. A data da última atualização fica sempre no topo desta página.
      </p>

      <p style={{ marginTop: 40 }}>
        <a href="/termos">Termos de Uso</a> · <a href="/">Voltar ao site</a>
      </p>
    </main>
  );
}
