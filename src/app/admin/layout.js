import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "../globals.css"
import Link from "next/link"
export const metadata = {
  title: 'Admin Dashboard',
  description: 'Study Hub Past Papers , Practice Questions for MDCAT ECAT SAT',
}

export default function AdminLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div className=" max-w-fit px-3 py-3 my-3 rounded-full mx-auto flex gap-3 text-base font-medium bg-indigo-500 text-white justify-center items-center">
        <Link href={"/admin"} className="bg-slate-800/20  px-2 rounded-full text-sm py-1">PDF List</Link>
        <Link href={"/admin/addpdf"} className="bg-slate-800/20  px-2 rounded-full text-sm py-1">Add Material</Link>
        </div>
        {children}
        </body>
    </html>
  )
}
