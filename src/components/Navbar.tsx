import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Music2, Home, User, MessageSquare, Upload, Search, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="backdrop-blur-md bg-black/30 border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Music2 className="h-8 w-8 text-[#f0f]" />
            <span className="text-2xl font-bold orbitron neon-text">CollaBeat</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="nav-link flex flex-col items-center hover:text-[#f0f] transition-colors">
              <Home className="h-6 w-6" />
              <span className="text-xs">Home</span>
            </Link>
            
            <Link to="/discover" className="nav-link flex flex-col items-center hover:text-[#f0f] transition-colors">
              <Search className="h-6 w-6" />
              <span className="text-xs">Discover</span>
            </Link>
            
            <Link to={`/profile/${user?.id}`} className="nav-link flex flex-col items-center hover:text-[#f0f] transition-colors">
              <User className="h-6 w-6" />
              <span className="text-xs">Profile</span>
            </Link>
            
            <Link to="/chat" className="nav-link flex flex-col items-center hover:text-[#f0f] transition-colors">
              <MessageSquare className="h-6 w-6" />
              <span className="text-xs">Chat</span>
            </Link>
            
            <Link to="/upload" className="nav-link flex flex-col items-center hover:text-[#f0f] transition-colors">
              <Upload className="h-6 w-6" />
              <span className="text-xs">Upload</span>
            </Link>

            <button
              onClick={handleLogout}
              className="nav-link flex flex-col items-center hover:text-[#f0f] transition-colors"
            >
              <LogOut className="h-6 w-6" />
              <span className="text-xs">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}