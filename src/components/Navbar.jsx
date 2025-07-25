import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-700 tracking-tight">SkillNest</h1>
      <div className="space-x-6 text-sm font-medium">
        <Link to="/" className="text-gray-700 hover:text-purple-600 transition">Home</Link>
        <Link to="/modules" className="text-gray-700 hover:text-purple-600 transition">Modules</Link>
        <Link to="/progress" className="text-gray-700 hover:text-purple-600 transition">Progress</Link>
      </div>
    </nav>
  );
}
