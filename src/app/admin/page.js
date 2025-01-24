"use client"
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Admin =  () => {
  const { user, setUser,loading } = useUser();
  const router = useRouter()

  useEffect(() => {   
    if (!loading && user === undefined) {
      router.push('/');
    }
    console.log(user)
  }, [user,router]);

   return (
    <div className="section flex items-center justify-center">
   {loading || !user ?  <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div> : (<>
      <h1>Admin</h1>
      
    </>)}
  </div>
  )
};

export default Admin;
