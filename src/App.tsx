import React from 'react';
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

const LandingPage = () => (
  <div className="min-h-screen bg-gray-900">
    <Navigation />
    <Hero />
    <WhyJoin />
    <Curriculum />
    <WeeklyWorkflow />
    <Rewards />
    <Mentors />
    <Testimonials />
    <ApplicationForm />
    <Footer />
  </div>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
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
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
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
          <Route path="/" element={<LandingPage />} />
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