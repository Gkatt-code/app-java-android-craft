
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import UniversityLogo from './UniversityLogo';

interface RegisterProps {
  onSwitchToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    setLoading(true);
    
    try {
      const success = await register(email, username, password);
      if (success) {
        toast.success('Account created successfully!');
      } else {
        toast.error('Registration failed');
      }
    } catch (error) {
      toast.error('Registration failed');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="mb-12 flex justify-center">
          <UniversityLogo size="lg" />
        </div>
        
        <form onSubmit={handleRegister} className="space-y-6">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 text-lg bg-white border-gray-200 rounded-xl"
            required
          />
          
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-14 text-lg bg-white border-gray-200 rounded-xl"
            required
          />
          
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 text-lg bg-white border-gray-200 rounded-xl"
            required
          />
          
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="h-14 text-lg bg-white border-gray-200 rounded-xl"
            required
          />
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 text-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 rounded-xl text-white font-medium"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>By clicking continue, you agree to our</p>
          <div className="space-x-2">
            <button className="text-blue-500 hover:text-blue-700">Terms of Service</button>
            <span>and</span>
            <button className="text-blue-500 hover:text-blue-700">Privacy Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
