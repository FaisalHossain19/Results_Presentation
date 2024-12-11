// components/AddTestResultButton.tsx
import Link from "next/link";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";

export const AddTestResultButton: React.FC = () => {
  const isLoggedIn = useIsLoggedIn();

  if (!isLoggedIn) return null; // Don't render the button if not logged in

  return (
    <div className="relative left-1/2 transform -translate-x-1/2 top-1">
      <Link href="/add-test-result">
        <button className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2 rounded hover:from-sky-500 hover:to-blue-600">
          Add Test Result
        </button>
      </Link>
    </div>
  );
};
