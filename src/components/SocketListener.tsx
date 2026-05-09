'use client'

import io from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import { useToast } from './ui/use-toast';

const SocketListener = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const socketRef = useRef<ReturnType<typeof io> | null>(null);

  useEffect(() => {
    socketRef.current = io(process.env.NEXT_PUBLIC_API_URL!);
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    const playerData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getuserdetails`, {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        });
        setName(response.data.data.username);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 401) {
            localStorage.setItem('auth', 'false');
            router.push('/');
            toast({ variant: 'destructive', title: 'Unauthorized' });
          }
        }
      }
    };
    playerData();
  }, []);

  useEffect(() => {
    const socket = socketRef.current;
    if (!name || !socket) return;

    socket.emit('login', name);

    const handleDual = async (message: string) => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getuserdetails`, {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 401) {
            localStorage.setItem('auth', 'false');
            socket.off('dual');
            router.push('/');
            toast({ variant: 'destructive', title: 'Unauthorized', description: message });
          }
        }
      }
    };

    socket.on('dual', handleDual);
    return () => { socket.off('dual', handleDual); };
  }, [name]);

  return null;
};

export default SocketListener;
