import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LandingPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Skillnest</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Learn real-life skills through interactive lessons and track your growth as you go.
      </p>

      {user ? (
        <Link
          to="/modules"
          className="bg-brand text-white px-6 py-3 rounded-md hover:bg-brand-dark transition"
        >
          Start Learning
        </Link>
      ) : (
        <Link
          to="/signup"
          className="bg-brand text-white px-6 py-3 rounded-md hover:bg-brand-dark transition"
        >
          Get Started
        </Link>
      )}
    </div>
  );
}
