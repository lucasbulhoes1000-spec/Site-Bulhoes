import "./globals.css";

export const metadata = {
  title: "Bulhões Odontologia | Lentes de Contato Dental em Santos",
  description: "Lentes de contato dental com planejamento individual e Método Bulhões."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
