// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-brand hover:text-brand-dark transition">
            Skillnest
          </Link>
          <div className="space-x-4 hidden sm:block">
            <Link to="/modules" className="text-gray-600 hover:text-gray-900 transition">
              Modules
            </Link>
            <Link to="/progress" className="text-gray-600 hover:text-gray-900 transition">
              Progress
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
