import { Link } from 'react-router-dom';

export default function ModuleList() {
  const modules = [
    {
      id: 'finance',
      name: 'Personal Finance',
      description: 'Learn how to manage, grow, and protect your money.',
      color: 'bg-purple-100 text-purple-700',
    },
    {
      id: 'mental-health',
      name: 'Mental Wellness',
      description: 'Build emotional resilience and daily mindfulness habits.',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      id: 'tech-skills',
      name: 'Digital Skills',
      description: 'Master tech fundamentals and tools used in real jobs.',
      color: 'bg-green-100 text-green-700',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Choose a Skill Module</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <Link
            key={mod.id}
            to={`/lesson/${mod.id}/1`}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition group"
          >
            <div className={`text-sm font-semibold inline-block px-3 py-1 rounded-full mb-3 ${mod.color}`}>
              {mod.name}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition">
              {mod.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
