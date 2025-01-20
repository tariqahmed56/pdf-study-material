"use client"
import React from 'react';
import { Search, BookOpen, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@/hooks/useUser';

export default function Navbar() {
  const {user} = useUser();
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href={'/'} className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">StudyHub</h1>
          </Link>

         {!user && <Link href={'/login'} className=" hidden lg:flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            <LogIn className="h-5 w-5" />
            <span>Sign In</span>
          </Link>}
        </div>
      </div>
    </header>
  );
}
