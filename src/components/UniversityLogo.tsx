
import React from 'react';
import { BookOpen, Shield } from 'lucide-react';

interface UniversityLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const UniversityLogo: React.FC<UniversityLogoProps> = ({ size = 'md', showText = false }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32'
  };

  const iconSize = {
    sm: 20,
    md: 32,
    lg: 48
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Shield className="w-full h-full text-university-maroon fill-current" />
        <BookOpen 
          size={iconSize[size]} 
          className="absolute text-white" 
        />
      </div>
      {showText && (
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-university-maroon">WISDOM</h2>
          <h2 className="text-2xl font-bold text-university-maroon">WIRE</h2>
          <p className="text-sm text-gray-600">by University of Colombo</p>
        </div>
      )}
    </div>
  );
};

export default UniversityLogo;
