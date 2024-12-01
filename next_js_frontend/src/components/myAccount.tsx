"use client";

import { useEffect, useState } from 'react';
import { API_HOST_BASE_URL } from '../lib/constants'; // Assuming this is where your API base URL is stored
import { useToast } from '../hooks/use-toast'; // Assuming you have a custom hook for toast notifications

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
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // Assuming token is stored in localStorage
          },
        });

        if (!response.ok) {
          throw new Error('User not logged in');
        }

        const data = await response.json();
        setUserData(data); // Set user data from the API response
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No user data found.</div>;
  }

  return (
    <div className="my-account-container">
      <h1>My Account</h1>
      <div className="account-details">
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Account Created At:</strong> {new Date(userData.created_at).toLocaleString()} (UTC)</p>
      </div>
    </div>
  );
}
