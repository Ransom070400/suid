import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhyJoin from './components/WhyJoin';
import Curriculum from './components/Curriculum';
import WeeklyWorkflow from './components/WeeklyWorkflow';
import Rewards from './components/Rewards';
import Mentors from './components/Mentors';
import Testimonials from './components/Testimonials';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import Login from './components/Login';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import { motion, AnimatePresence } from 'framer-motion';

// Bouncy scroll effect + sticky bouncing backgrounds
const BouncyScrollEffect = () => {
  useEffect(() => {
    // Bouncy background blobs that bounce as you scroll
    const blobs = document.querySelectorAll('.bouncy-blob');
    const handleScroll = () => {
      const scrollY = window.scrollY;
      blobs.forEach((blob, i) => {
        // Make each blob bounce at a different amplitude and frequency
        const amplitude = 16 + i * 8;
        const frequency = 0.005 + i * 0.003;
        blob.style.transform = `translateY(${Math.sin(scrollY * frequency + i) * amplitude}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      {/* Add some bouncy blobs for effect */}
      <div className="bouncy-blob fixed top-0 left-0 z-0 w-64 h-64 rounded-full bg-blue-600/50 blur-3xl pointer-events-none" style={{ filter: 'blur(40px)' }} />
      <div className="bouncy-blob fixed top-1/2 right-0 z-0 w-72 h-72 rounded-full bg-blue-600/40 blur-3xl pointer-events-none" style={{ filter: 'blur(36px)' }} />
      <div className="bouncy-blob fixed bottom-0 left-1/4 z-0 w-56 h-56 rounded-full bg-blue-600/30 blur-3xl pointer-events-none" style={{ filter: 'blur(32px)' }} />
    </div>
  );
};

// Bouncy page transitions and slick movement for some top-level components
const BouncyLandingPage = () => (
  <div className="min-h-screen bg-gray-900 relative overflow-x-hidden">
    <BouncyScrollEffect />
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.55 }}
        key="landing-page"
      >
        {/* Navigation gets a springy entrance */}
        <motion.div
          initial={{ y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.7, duration: 0.8 }}
        >
          <Navigation />
        </motion.div>
        {/* Each main section slides in with bounce */}
        <motion.section
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.55, delay: 0.2, duration: 0.7 }}
        >
          <Hero />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.52, delay: 0.3, duration: 0.7 }}
        >
          <WhyJoin />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.51, delay: 0.35, duration: 0.6 }}
        >
          <Curriculum />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.4, duration: 0.6 }}
        >
          <WeeklyWorkflow />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.48, delay: 0.45, duration: 0.6 }}
        >
          <Rewards />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.46, delay: 0.5, duration: 0.6 }}
        >
          <Mentors />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.45, delay: 0.55, duration: 0.6 }}
        >
          <Testimonials />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.44, delay: 0.6, duration: 0.6 }}
        >
          <ApplicationForm />
        </motion.section>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.65, duration: 0.5 }}
        >
          <Footer />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </div>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return user ? <Navigate to="/dashboard" /> : <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BouncyLandingPage />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;