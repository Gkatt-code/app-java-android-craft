
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import UniversityLogo from './UniversityLogo';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Profile: React.FC = () => {
  const { user, logout, updateUser } = useAuth();
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);
  const [email, setEmail] = useState(user?.email || '');
  const [username, setUsername] = useState(user?.username || '');

  const handleSave = () => {
    updateUser({ email, username });
    setShowEditDialog(false);
    toast.success('Profile updated successfully!');
  };

  const handleSignOut = () => {
    logout();
    toast.success('Signed out successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 border-b">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">My Account</h1>
          <UniversityLogo size="sm" />
        </div>
      </div>

      {/* Developer Section */}
      <div className="px-4 pt-6">
        <div className="text-center mb-6">
          <h2 className="text-lg font-medium text-gray-600 mb-4">Developer</h2>
          <UniversityLogo size="md" showText />
        </div>

        <div className="bg-blue-100 rounded-2xl p-6 mb-6">
          <div className="w-24 h-24 bg-blue-500 rounded-2xl mx-auto mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
              alt="Developer" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="font-medium text-gray-600">Developer</h3>
            <p className="font-semibold">K.A.T.T. Kahandawaarachchi</p>
            <p className="text-sm text-gray-600">2020/T/00881</p>
            <p className="text-sm text-gray-600 mt-4">App Version</p>
            <p className="font-semibold">1.0.0</p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="px-4">
        <div className="bg-white rounded-2xl p-6 mb-4">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Username :</span>
              <span className="font-medium">{user?.username}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email :</span>
              <span className="font-medium">{user?.email}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 pb-20">
          <Button
            onClick={() => setShowEditDialog(true)}
            className="w-full h-14 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 rounded-xl text-white font-medium"
          >
            Change Details
          </Button>
          
          <Button
            onClick={() => setShowSignOutDialog(true)}
            variant="outline"
            className="w-full h-14 border-gray-300 rounded-xl font-medium"
          >
            Sign-out
          </Button>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="mx-4 rounded-2xl">
          <DialogHeader>
            <DialogTitle>Edit Personal Data</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-xl"
            />
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-12 rounded-xl"
            />
            <div className="flex space-x-4 pt-4">
              <Button
                onClick={handleSave}
                className="flex-1 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl"
              >
                Save
              </Button>
              <Button
                onClick={() => setShowEditDialog(false)}
                variant="outline"
                className="flex-1 h-12 rounded-xl"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Sign Out Dialog */}
      <Dialog open={showSignOutDialog} onOpenChange={setShowSignOutDialog}>
        <DialogContent className="mx-4 rounded-2xl">
          <div className="text-center py-4">
            <h3 className="text-lg font-semibold mb-6">You are about to Sign-Out!</h3>
            <div className="flex space-x-4">
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="flex-1 h-12 rounded-xl"
              >
                Sign-out
              </Button>
              <Button
                onClick={() => setShowSignOutDialog(false)}
                className="flex-1 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl"
              >
                Stay
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
