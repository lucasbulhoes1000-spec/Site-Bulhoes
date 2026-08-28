const HEADERS = [
  "click_id",
  "data_hora",
  "destino",
  "origem_link",
  "projeto",
  "evento",
  "click_location",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "pagina",
  "landing_page",
  "first_referrer",
  "nome",
  "telefone",
  "status_lead",
  "venda",
  "valor_venda",
  "crm_id"
];


/* =====================================================
   NOMES DAS ABAS
===================================================== */

const ABA_LARISSA = "Larissa";

const ABA_BULHOES = "Bulhões Odontologia";

const ABA_SITE_INSTITUCIONAL = "Site Institucional";


/* =====================================================
   LOCALIZAR / PREPARAR UMA ABA
===================================================== */

function setupAba(nomeAba) {

  const spreadsheet =
    SpreadsheetApp
      .getActiveSpreadsheet();


  let sheet =
    spreadsheet
      .getSheetByName(nomeAba);


  /*
    Caso a aba não exista,
    cria automaticamente.
  */

  if (!sheet) {

    sheet =
      spreadsheet
        .insertSheet(nomeAba);

  }


  const lastColumn =
    Math.max(
      sheet.getLastColumn(),
      1
    );


  const currentHeaders =
    sheet
      .getRange(
        1,
        1,
        1,
        lastColumn
      )
      .getValues()[0]
      .map(
        value =>
          String(value).trim()
      );


  /*
    Adiciona apenas colunas que ainda
    não existam.

    Não apaga nem reorganiza dados antigos.
  */

  HEADERS.forEach(
    header => {

      if (
        !currentHeaders.includes(header)
      ) {

        const newColumn =
          sheet.getLastColumn() + 1;


        sheet
          .getRange(
            1,
            newColumn
          )
          .setValue(header);


        currentHeaders.push(header);

      }

    }
  );


  /*
    Formatação básica.
  */

  const headerRange =
    sheet.getRange(
      1,
      1,
      1,
      sheet.getLastColumn()
    );


  headerRange.setFontWeight("bold");

  sheet.setFrozenRows(1);


  return sheet;

}


/* =====================================================
   CONFIGURAR TODA A PLANILHA
===================================================== */

function setupPlanilha() {

  setupAba(
    ABA_LARISSA
  );


  setupAba(
    ABA_BULHOES
  );


  setupAba(
    ABA_SITE_INSTITUCIONAL
  );


  SpreadsheetApp.flush();

}


/* =====================================================
   IDENTIFICAR DE QUAL PROJETO VEIO O REGISTRO
===================================================== */

function identificarAba(data) {

  /*
    Primeiro verificamos um identificador explícito.

    Isso impede que o site institucional seja
    confundido com a LP da Bulhões.
  */

  const projeto =
    String(
      data.projeto || ""
    )
      .trim()
      .toLowerCase();


  /*
    SITE INSTITUCIONAL
  */

  if (
    projeto === "site_institucional"
  ) {

    return ABA_SITE_INSTITUCIONAL;

  }


  /*
    Junta os campos que podem conter
    o endereço da página.
  */

  const origem =
    [
      data.pagina || "",
      data.landing_page || "",
      data.origem_link || "",
      data.projeto || ""
    ]
      .join(" ")
      .toLowerCase();


  /*
    LP / LINK NA BIO DA BULHÕES

    Essa regra continua existindo para
    não alterar o funcionamento atual.
  */

  if (
    origem.includes(
      "bulhoes-odontologia"
    ) ||
    projeto === "bulhoes" ||
    projeto === "lp_bulhoes" ||
    projeto === "link_bio_bulhoes"
  ) {

    return ABA_BULHOES;

  }


  /*
    Todo registro antigo e todo registro
    da LP da Larissa continua indo para Larissa.
  */

  return ABA_LARISSA;

}


/* =====================================================
   CRIAR ID CASO NÃO VENHA DO SITE
===================================================== */

function gerarClickId(prefixo) {

  const agora =
    new Date()
      .getTime()
      .toString(36)
      .toUpperCase();


  const aleatorio =
    Math
      .random()
      .toString(36)
      .substring(2, 7)
      .toUpperCase();


  return (
    prefixo +
    "-" +
    agora +
    aleatorio
  );

}


/* =====================================================
   RECEBER DADOS
===================================================== */

function doPost(e) {

  try {

    /*
      Validação básica.
    */

    if (
      !e ||
      !e.postData ||
      !e.postData.contents
    ) {

      throw new Error(
        "Nenhum dado recebido."
      );

    }


    /*
      Dados enviados pelo site / LP.
    */

    const data =
      JSON.parse(
        e.postData.contents
      );


    /*
      Descobre automaticamente qual aba usar.
    */

    const nomeAba =
      identificarAba(data);


    /*
      Prepara apenas a aba necessária.
    */

    const sheet =
      setupAba(nomeAba);


    /*
      Prefixo usado somente caso o site
      não envie click_id.
    */

    let prefixo = "LARI";


    if (
      nomeAba === ABA_BULHOES
    ) {

      prefixo = "BULHOES";

    }


    if (
      nomeAba === ABA_SITE_INSTITUCIONAL
    ) {

      prefixo = "SITE";

    }


    const clickId =
      data.click_id ||
      gerarClickId(prefixo);


    /*
      Lê a ordem REAL das colunas existentes.
    */

    const currentHeaders =
      sheet
        .getRange(
          1,
          1,
          1,
          sheet.getLastColumn()
        )
        .getValues()[0]
        .map(
          value =>
            String(value).trim()
        );


    /*
      Monta a nova linha de acordo
      com os títulos existentes.
    */

    const row =
      currentHeaders.map(
        header => {

          switch (header) {

            case "click_id":

              return clickId;


            case "data_hora":

              return (
                data.data_hora ||
                new Date().toISOString()
              );


            case "destino":

              return (
                data.destino ||
                ""
              );


            case "origem_link":

              return (
                data.origem_link ||
                ""
              );


            case "projeto":

              return (
                data.projeto ||
                ""
              );


            case "evento":

              return (
                data.evento ||
                ""
              );


            case "click_location":

              return (
                data.click_location ||
                ""
              );


            case "utm_source":

              return (
                data.utm_source ||
                ""
              );


            case "utm_medium":

              return (
                data.utm_medium ||
                ""
              );


            case "utm_campaign":

              return (
                data.utm_campaign ||
                ""
              );


            case "utm_content":

              return (
                data.utm_content ||
                ""
              );


            case "utm_term":

              return (
                data.utm_term ||
                ""
              );


            case "fbclid":

              return (
                data.fbclid ||
                ""
              );


            case "gclid":

              return (
                data.gclid ||
                ""
              );


            case "pagina":

              return (
                data.pagina ||
                ""
              );


            case "landing_page":

              return (
                data.landing_page ||
                ""
              );


            case "first_referrer":

              return (
                data.first_referrer ||
                ""
              );


            case "nome":

              return (
                data.nome ||
                ""
              );


            case "telefone":

              return (
                data.telefone ||
                ""
              );


            case "status_lead":

              return (
                data.status_lead ||
                ""
              );


            case "venda":

              return (
                data.venda ||
                ""
              );


            case "valor_venda":

              return (
                data.valor_venda ||
                ""
              );


            case "crm_id":

              return (
                data.crm_id ||
                ""
              );


            default:

              return "";

          }

        }
      );


    /*
      Salva o registro.
    */

    sheet.appendRow(row);


    SpreadsheetApp.flush();


    /*
      Retorno do Web App.
    */

    return ContentService
      .createTextOutput(
        JSON.stringify(
          {
            success: true,

            click_id:
              clickId,

            aba:
              nomeAba
          }
        )
      )
      .setMimeType(
        ContentService.MimeType.JSON
      );

  }

  catch (error) {

    return ContentService
      .createTextOutput(
        JSON.stringify(
          {
            success: false,

            error:
              error.toString()
          }
        )
      )
      .setMimeType(
        ContentService.MimeType.JSON
      );

  }

}
