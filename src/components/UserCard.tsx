import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import type { User } from '../types';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-gray-900/50 rounded-xl p-6 neon-border">
      <div className="flex items-center space-x-4">
        <img src={user.avatar} alt={user.username} className="w-16 h-16 rounded-full" />
        <div className="flex-1">
          <Link to={`/profile/${user.id}`} className="text-lg font-semibold hover:text-[#f0f]">
            {user.username}
          </Link>
          <p className="text-gray-400 text-sm">{user.bio}</p>
          <div className="flex space-x-4 mt-2 text-sm text-gray-400">
            <span>{user.followers} followers</span>
            <span>{user.following} following</span>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-[#f0f]/20 transition-colors">
          <UserPlus className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}