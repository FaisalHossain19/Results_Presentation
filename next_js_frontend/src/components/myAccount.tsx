"use client";

import { useEffect, useState } from 'react';
import { API_HOST_BASE_URL } from '../lib/constants';
import { useToast } from '../hooks/use-toast';

interface User {
  username: string;
  email: string;
  created_at: string;
}

export function MyAccount() {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${API_HOST_BASE_URL}/users/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('User not logged in');
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        toast({
          title: 'Error',
          description: 'User not logged in. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [toast]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen">
        No user data found.
      </div>
    );
  }

  return (
    <div className="max-w-[400px] mx-auto p-6 bg-card text-card-foreground border border-muted rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4 text-primary">My Account</h1>
      <div className="space-y-4">
        <div>
          <span className="font-semibold">Username:</span> {userData.username}
        </div>
        <div>
          <span className="font-semibold">Email:</span> {userData.email}
        </div>
        <div>
          <span className="font-semibold">Account Created At:</span>{' '}
          {new Date(userData.created_at).toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short',
          })}{' '}
          (UTC)
        </div>
      </div>
    </div>
  );
}
