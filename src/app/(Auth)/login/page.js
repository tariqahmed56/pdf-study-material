"use client"
import { supabase } from '@/app/lib/supabaseClient';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter()
  const handleSignIn = async () => {

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Logged in successfully!');
      router.push('/')
    
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
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
          onClick={handleSignIn}
          disabled={loading}
          className={`w-full py-3 text-white font-medium rounded-lg ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
          }`}
        >

          {loading ? 'Loading...' : 'Sign In'}
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
        <h3 className='py-2 px-2 font-medium text-xl'>Don't have an account ? <Link href={'/register'} className='underline text-sm hover:text-blue-500'>Register Now</Link></h3>
      </div>
    </div>
  );
};

export default Login;
