import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Schedule from './pages/Schedule';
import Profile from './pages/Profile';
import './styles.css';

function App() {
  const [userCourses, setUserCourses] = useState(() => {
    const saved = localStorage.getItem('userCourses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('userCourses', JSON.stringify(userCourses));
  }, [userCourses]);

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/courses" 
              element={
                <Courses 
                  userCourses={userCourses}
                  setUserCourses={setUserCourses}
                />
              } 
            />
            <Route path="/schedule" element={<Schedule />} />
            <Route 
              path="/profile" 
              element={<Profile userCourses={userCourses} />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;