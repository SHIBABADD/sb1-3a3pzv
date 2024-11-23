import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Music2 } from 'lucide-react';
import { Input } from '../components/Input';
import { useAuthStore } from '../store/authStore';

function SignUp() {
  const navigate = useNavigate();
  const signup = useAuthStore((state) => state.signup);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await signup(formData.username, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError('Failed to create account');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-900/50 p-8 rounded-xl neon-border max-w-md w-full">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center space-x-2">
            <Music2 className="h-10 w-10 text-[#f0f]" />
            <span className="text-3xl font-bold orbitron neon-text">CollaBeat</span>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            fullWidth
            required
          />

          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            fullWidth
            required
          />

          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            fullWidth
            required
          />

          <Input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            fullWidth
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-[#f0f]/20 rounded-full hover:bg-[#f0f]/30 transition-colors font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-[#f0f] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;