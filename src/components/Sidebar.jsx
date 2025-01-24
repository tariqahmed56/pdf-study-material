"use client";
import React, { useState } from "react";
import {
  Book,
  FileText,
  Info,
  Star,
  Menu,
  X,
  LogIn,
  LogOut,
  LayoutDashboard,
  Bookmark
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/app/lib/supabaseClient";
import { useUser } from "@/hooks/useUser";
export default function Sidebar() {
  const { user, loading , setUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Book, label: "Practice Question", path: "/practice-questions" },
    { icon: FileText, label: "Past Papers", path: "/past-papers" },
    { icon: Info, label: "Exam Info", path: "/exam-info" },
    { icon: Bookmark, label: "Favorites", path: "/favorite" },
    { icon: LogIn, label: "Sign In/Register", path: "/login" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative shrink-0">
      <div
        className={`fixed top-0 left-0 h-full  bg-white shadow-md p-4 transition-transform duration-300 z-40 lg:static lg:transform-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:w-72 w-64`}
      >
        <nav>
          {menuItems.map((item, index) => (
            <Link
              href={item.path}
              key={item.label}
              className={`w-full ${
                menuItems.length - 1 === index ? "lg:hidden flex" : "flex"
              } items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors`}
            >
              <item.icon className={`h-5 w-5`} />
              <span className="flex-1 text-left">{item.label}</span>
            </Link>
          ))}
          {
            user?.id === process.env.NEXT_PUBLIC_ADMIN_UID  ||  user?.id === process.env.NEXT_PUBLIC_DEV_UID &&
            <Link
              href={"/admin"}
              className={`w-full items-center  flex space-x-3 px-4 py-3 mb-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors`}
            >
              <LayoutDashboard/>
             <span className="flex-1 text-left">Admin</span>
            </Link>
          }

          <button
            onClick={() => {
              supabase.auth.signOut();
              setUser(null)
            }}
            className="flex items-center space-x-2  bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </button>
        </nav>
      </div>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
        ></div>
      )}
      <button
        onClick={toggleSidebar}
        className="p-2 text-gray-700 bg-white rounded-md shadow-md fixed top-4 right-4 block z-50 lg:hidden"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  );
}
