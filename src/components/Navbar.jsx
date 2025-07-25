import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-brand hover:text-brand-dark transition">
            Skillnest
          </Link>

          <div className="space-x-4 hidden sm:block">
            {user && (
              <>
                <Link to="/modules" className="text-gray-600 hover:text-gray-900 transition">
                  Modules
                </Link>
                <Link to="/progress" className="text-gray-600 hover:text-gray-900 transition">
                  Progress
                </Link>
                <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 transition">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="text-red-500 hover:text-red-700 transition">
                  Logout
                </button>
              </>
            )}

            {!user && (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900 transition">
                  Login
                </Link>
                <Link to="/signup" className="text-gray-600 hover:text-gray-900 transition">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
