
import localFont from "next/font/local";
import "./globals.css";
import Store from "./store/Store";
import Providers from "./Providers";
export const metadata = {
  title: 'Admin Dashboard',
  icons: {
    icon: '/images/logo.svg',
  },
}



const nacyFont = localFont({
  src: "../../public/Font/Raleway-VariableFont_wght.ttf",
  variable: "--font-nacy",
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
   
      <html lang="en" className={nacyFont.variable}>
        <body>
          <Providers> <Store>{children}</Store></Providers>
         
        </body>
      </html>
   
  );
}
