"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/app/lib/supabaseClient';
const Register = () => {
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
     const handleSignUp = async () => {
        setLoading(true);
        const { error } = await supabase.auth.signUp({ email, password });
        setLoading(false);
        if (error) {
          setMessage(error.message);
        } else {
          setMessage('Check your email for a confirmation link!');
        }
      };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-semibold text-center mb-6">Create Your Account</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
     
      <button
        onClick={handleSignUp}
        disabled={loading}
        className={`w-full py-3 text-white font-medium rounded-lg ${
          loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-800'
        }`}
      >
        {loading ? 'Loading...' : 'Create'}
      </button>
      {message && (
        <p
          className={`mt-4 text-center ${
            message.includes('success') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
      <h3 className='py-2 px-2 font-medium text-xl'>Already have an Account ? <Link href={'/login'} className='underline text-sm hover:text-blue-500'>then Sign in here</Link></h3>
    </div>
  </div>  )
}

export default Register