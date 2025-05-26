
import React from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import AppLayout from '@/components/AppLayout';

const Index = () => {
  return (
    <AuthProvider>
      <div className="max-w-md mx-auto bg-white min-h-screen relative">
        {/* Status bar simulation */}
        <div className="h-6 bg-white flex items-center justify-between px-4 text-black text-sm font-medium">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <svg className="w-6 h-4" viewBox="0 0 24 12" fill="none">
              <rect x="1" y="3" width="18" height="6" rx="2" stroke="black" strokeWidth="1" fill="none"/>
              <rect x="20" y="4.5" width="2" height="3" rx="0.5" fill="black"/>
              <rect x="2" y="4" width="16" height="4" rx="1" fill="black"/>
            </svg>
          </div>
        </div>
        
        <AppLayout />
      </div>
    </AuthProvider>
  );
};

export default Index;
