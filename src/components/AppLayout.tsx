
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Profile from './Profile';
import BottomNavigation from './BottomNavigation';

const AppLayout: React.FC = () => {
  const { user } = useAuth();
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [activeTab, setActiveTab] = useState<'home' | 'calendar' | 'profile'>('home');

  if (!user) {
    return authMode === 'login' ? (
      <Login onSwitchToRegister={() => setAuthMode('register')} />
    ) : (
      <Register onSwitchToLogin={() => setAuthMode('login')} />
    );
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard />;
      case 'calendar':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <p className="text-gray-600">Calendar Coming Soon</p>
          </div>
        );
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="relative">
      {renderActiveTab()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default AppLayout;
