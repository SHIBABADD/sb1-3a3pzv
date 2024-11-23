import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '../components/Input';
import { UserCard } from '../components/UserCard';
import type { User } from '../types';

const mockUsers: User[] = [
  {
    id: '2',
    username: 'JazzMaster',
    avatar: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=150&h=150&fit=crop',
    bio: '🎷 Jazz musician and composer',
    followers: 1234,
    following: 89
  },
  {
    id: '3',
    username: 'RockLegend',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    bio: '🎸 Rock guitarist | Band available for events',
    followers: 2567,
    following: 143
  }
];

function Discover() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(mockUsers);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredUsers(
      mockUsers.filter(user => 
        user.username.toLowerCase().includes(term) ||
        user.bio.toLowerCase().includes(term)
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search musicians, genres, or instruments..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-12"
            fullWidth
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Discover;