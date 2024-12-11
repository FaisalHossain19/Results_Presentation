"use client";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/AuthContext';

function LogoutButton() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // Update the global state and clear storage
    router.push('/sign-in'); // Redirect to sign-in page
  };

  return (
    <Button onClick={handleLogout} variant="outline" className="px-6 py-2">
      Logout
    </Button>
  );
}

export default LogoutButton;
