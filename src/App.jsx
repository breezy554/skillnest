import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ModuleList from './pages/ModuleList';
import LessonPage from './pages/LessonPage';
import ProgressPage from './pages/ProgressPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/modules" element={<ModuleList />} />
          <Route path="/lesson/:moduleId/:lessonId" element={<LessonPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/modules" element={<ProtectedRoute><ModuleList /></ProtectedRoute>} />
          <Route path="/progress" element={<ProtectedRoute><ProgressPage /></ProtectedRoute>} />
          <Route path="/lesson/:moduleId/:lessonId" element={<ProtectedRoute><LessonPage /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
