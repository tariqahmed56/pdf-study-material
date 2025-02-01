"use client"
import { supabase } from '@/app/lib/supabaseClient';
import { useEffect, useState } from 'react';

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ap = async () => {
      const session = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    }
    ap()

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // return () => listener?.unsubscribe() 
  }, []);

  return { user, loading , setUser };
};
