'use client'

import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import { useToast } from './ui/use-toast';

const socket = io(process.env.NEXT_PUBLIC_API_URL);

const SocketListener = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [name, setName] = useState('');

  useEffect(() => {
    const playerData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getuserdetails`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setName(response.data.data.username);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response && axiosError.response.status === 401) {
            localStorage.setItem('auth', 'false');
            router.push('/');
            toast({
              variant: 'destructive',
              title: 'Unauthorized',
            });
          }
        }
      }
    };
    playerData();
  }, []);

  useEffect(() => {
    if (name) {
      socket.emit('login', name); 
      socket.on('dual', (message) => {        
        const playerData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getuserdetails`, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setName(response.data.data.username);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    if (axiosError.response && axiosError.response.status === 401) {
                        localStorage.setItem('auth', 'false');
                        router.push('/');
                        socket.off('dual'); 
                        alert('Logging out due to another login');
                        toast({
                            variant: 'destructive',
                            title: 'Unauthorized',
                            description: message,
                        });
                    }
                }
            }
        };
        playerData();
    });
    }
  }, [name, socket]); 

  return null;
};

export default SocketListener;
