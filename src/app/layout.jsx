import localFont from 'next/font/local'
import './globals.css'

const nacyFont = localFont({
  src: '../../public/Font/nacy.ttf',
  variable: '--font-nacy',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="fa" className={nacyFont.variable}>
      <body>{children}</body>
    </html>
  )
}
