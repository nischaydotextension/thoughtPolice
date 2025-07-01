import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import StatsPage from './pages/StatsPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import { BoltNewBadge } from './components/ui/bolt-new-badge';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-reddit-light-bg-light dark:bg-reddit-dark-bg transition-colors duration-200">
          <Navigation />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
          
          {/* Global Bolt Badge */}
          <BoltNewBadge 
            position="bottom-right" 
            variant="auto" 
            size="medium"
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;