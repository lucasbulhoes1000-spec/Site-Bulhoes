import './globals.css'

export const metadata = {
  title: 'Bulhões Odontologia | Lentes de Contato Dental',
  description: 'Estrutura inicial do novo site da Bulhões Odontologia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
