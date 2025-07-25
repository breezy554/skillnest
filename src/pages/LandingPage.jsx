import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-purple-100 to-white">
      <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-4">Welcome to <span className="text-purple-700">SkillNest</span></h2>
      <p className="text-gray-600 text-lg max-w-xl mb-6">
        Learn real-world skills in bite-sized daily lessons. Start with personal finance, master everything else.
      </p>
      <Link to="/modules">
        <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-purple-800 transition">
          Start Learning
        </button>
      </Link>
    </div>
  );
}
