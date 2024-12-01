import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('accessToken');

    // Optionally clear other user data
    localStorage.removeItem('user');

    // Redirect to the login page
    router.push('/sign-in');
  };

  return (
    <Button onClick={handleLogout} variant="outline" className="px-6 py-2">
      Logout
    </Button>
  );
}

export default LogoutButton;
