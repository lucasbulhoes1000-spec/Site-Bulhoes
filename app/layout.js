import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.bulhoesodontologia.com.br"),

  title: {
    default: "Bulhões Odontologia | Lentes de Contato Dental em Santos",
    template: "%s | Bulhões Odontologia",
  },

  description:
    "Clínica odontológica em Santos especializada em lentes de contato dental, com planejamento personalizado através do Método Bulhões e foco em resultados naturais.",

  keywords: [
    "lentes de contato dental",
    "lentes de contato dental Santos",
    "lentes em resina Santos",
    "lentes em porcelana Santos",
    "dentista Santos",
    "clínica odontológica Santos",
    "Bulhões Odontologia",
    "Método Bulhões",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Bulhões Odontologia | Lentes de Contato Dental em Santos",
    description:
      "Planejamento individual através do Método Bulhões para criar sorrisos naturais, elegantes e personalizados.",
    url: "https://www.bulhoesodontologia.com.br",
    siteName: "Bulhões Odontologia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/hero-bulhoes.png",
        width: 1200,
        height: 1500,
        alt: "Bulhões Odontologia - Lentes de Contato Dental em Santos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bulhões Odontologia | Lentes de Contato Dental em Santos",
    description:
      "Planejamento individual através do Método Bulhões para resultados naturais e personalizados.",
    images: ["/hero-bulhoes.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Bulhões Odontologia",
  url: "https://www.bulhoesodontologia.com.br",
  telephone: "+55 13 99630-0176",
  image: "https://www.bulhoesodontologia.com.br/hero-bulhoes.png",

  description:
    "Clínica odontológica em Santos especializada em lentes de contato dental, com planejamento personalizado através do Método Bulhões.",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Senador Feijó, 686, Sala 923",
    addressLocality: "Santos",
    addressRegion: "SP",
    postalCode: "11015-504",
    addressCountry: "BR",
  },

  sameAs: ["https://www.instagram.com/bulhoesodontologia/"],

  areaServed: {
    "@type": "City",
    name: "Santos",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}

        {/* GOOGLE ANALYTICS 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M0LC765XZQ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', 'G-M0LC765XZQ');
          `}
        </Script>

        {/* DADOS ESTRUTURADOS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
