import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getTotalLessons } from "../lib/progress";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(0);
  const totalLessons = getTotalLessons();

  const handleLogout = () => {
    signOut(auth);
    navigate("/login");
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) return;

      const data = docSnap.data();
      setUserData(data);

      const completed = Object.keys(data.progress || {}).length;
      setCompletedLessons(completed);

      const pct = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
      setProgressPercent(pct);
    };

    fetchUser();
  }, [user, totalLessons]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome{userData?.firstName ? `, ${userData.firstName}` : ""} 👋
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Progress Card */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Your Progress</h2>
            <div className="text-gray-600">
              {completedLessons}/{totalLessons} lessons completed —{" "}
              <span className="font-bold text-brand">{progressPercent}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded mt-3">
              <div
                className="h-2 bg-brand rounded"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Quick Actions</h2>
            <div className="space-y-2">
              <button onClick={() => navigate("/modules")} className="w-full text-left bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-md">
                📚 View All Modules
              </button>
              <button onClick={() => navigate("/progress")} className="w-full text-left bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-md">
                📈 Check Progress
              </button>
              <button onClick={handleLogout} className="w-full text-left bg-red-100 hover:bg-red-200 text-red-700 p-3 rounded-md">
                🚪 Log Out
              </button>
            </div>
          </div>

          {/* Motivation */}
          <div className="bg-white rounded-xl shadow p-6 col-span-1 sm:col-span-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">🔥 Tip of the Day</h2>
            <p className="text-gray-600 italic">
              "Small consistent steps beat bursts of motivation. Keep going — progress compounds."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
