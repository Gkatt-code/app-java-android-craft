
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import UniversityLogo from './UniversityLogo';

interface LoginProps {
  onSwitchToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const success = await login(username, password);
      if (success) {
        toast.success('Login successful!');
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      toast.error('Login failed');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="mb-12 flex justify-center">
          <UniversityLogo size="lg" />
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
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
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 text-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 rounded-xl text-white font-medium"
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <button
            onClick={onSwitchToRegister}
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Create Account.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
