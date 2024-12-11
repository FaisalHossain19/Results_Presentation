// components/AddVersionButton.tsx
import Link from "next/link";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";

export const AddVersionButton: React.FC = () => {
  const isLoggedIn = useIsLoggedIn();

  if (!isLoggedIn) return null; // Don't render the button if not logged in

  return (
    <div className="relative inset-0 flex items-center justify-center z-10 top-1">
      <Link href="/add-version">
        <button className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2 rounded hover:from-sky-500 hover:to-blue-600">
          Add Version
        </button>
      </Link>
    </div>
  );
};
