import Link from "next/link";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";

export const AddVersionButton: React.FC = () => {
  const isLoggedIn = useIsLoggedIn();

  if (!isLoggedIn) return null; // Don't render the button if not logged in

  return (
    <div className="absolute top-4 left-4">
      <Link href="/add-version">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Version
        </button>
      </Link>
    </div>
  );
};
