import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import Overview from './Overview';
import VideoLessons from './VideoLessons';
import Assignments from './Assignments';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'lessons':
        return <VideoLessons />;
      case 'assignments':
        return <Assignments />;
      case 'leaderboard':
        return <div className="text-white">Leaderboard coming soon...</div>;
      case 'community':
        return <div className="text-white">Community features coming soon...</div>;
      case 'settings':
        return <div className="text-white">Settings coming soon...</div>;
      default:
        return <Overview />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default StudentDashboard;