import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "../globals.css"
import Sidebar from "@/components/Sidebar"
import { Roboto, Inter } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-roboto',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '600'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Imtehan Gah',
  description: 'ImtehanGah is platform which provides Past Papers , Practice Questions for MDCAT, ECAT , SAT.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        <Navbar/>
        <main className="flex relative">
        <Sidebar/>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
