
import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Dashboard: React.FC = () => {
  const faculties = [
    { name: 'Tech', color: 'bg-green-400', image: '🏢' },
    { name: 'UCSC', color: 'bg-blue-400', image: '💻' },
    { name: 'Law', color: 'bg-gray-400', image: '⚖️' },
    { name: 'Physics', color: 'bg-red-400', image: '🔬' }
  ];

  const news = [
    { title: 'Academic', color: 'bg-orange-400', image: '📚' },
    { title: 'Staff', color: 'bg-green-400', image: '👥' },
    { title: 'Welfare', color: 'bg-blue-400', image: '🏥' },
    { title: 'Clubs', color: 'bg-yellow-400', image: '🎭' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search"
            className="pl-10 h-12 bg-gray-100 border-0 rounded-xl"
          />
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="px-4 pt-4">
        <div 
          className="h-32 rounded-xl bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop")'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-xl font-bold">Welcome to University of Colombo</h2>
          </div>
        </div>
      </div>

      {/* Faculties */}
      <div className="px-4 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Faculties</h3>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {faculties.map((faculty, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-16 h-16 ${faculty.color} rounded-full flex items-center justify-center text-2xl mb-2`}>
                {faculty.image}
              </div>
              <span className="text-sm font-medium text-center">{faculty.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Internal News */}
      <div className="px-4 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Internal News</h3>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {news.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-2xl mb-2`}>
                {item.image}
              </div>
              <span className="text-sm font-medium text-center">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Events */}
      <div className="px-4 pt-6 pb-20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Events</h3>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center text-2xl mb-2">
                🎉
              </div>
              <span className="text-sm font-medium text-center">Event {item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
