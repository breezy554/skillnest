import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ModuleList from './pages/ModuleList';
import LessonPage from './pages/LessonPage';
import ProgressPage from './pages/ProgressPage';
import Navbar from './components/Navbar';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
