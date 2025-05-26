
import React from 'react';
import { Home, Calendar, User } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: 'home' | 'calendar' | 'profile';
  onTabChange: (tab: 'home' | 'calendar' | 'profile') => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <button
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center justify-center flex-1 h-full ${
            activeTab === 'home' ? 'text-university-maroon' : 'text-gray-400'
          }`}
        >
          <Home size={24} />
        </button>
        
        <button
          onClick={() => onTabChange('calendar')}
          className={`flex flex-col items-center justify-center flex-1 h-full ${
            activeTab === 'calendar' ? 'text-university-maroon' : 'text-gray-400'
          }`}
        >
          <Calendar size={24} />
        </button>
        
        <button
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center justify-center flex-1 h-full ${
            activeTab === 'profile' ? 'text-university-maroon' : 'text-gray-400'
          }`}
        >
          <User size={24} />
        </button>
      </div>
      
      {/* Home indicator */}
      <div className="h-1 bg-black rounded-full mx-auto mb-2" style={{ width: '134px' }} />
    </div>
  );
};

export default BottomNavigation;
