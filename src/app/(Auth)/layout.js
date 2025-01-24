import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "../globals.css"
export const metadata = {
  title: 'Imtehan Gah Login',
  description: 'Imtehan Gah provides Past Papers , Practice Questions for MDCAT ECAT SAT',
}

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
