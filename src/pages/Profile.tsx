import React from 'react';
import { Settings, Music, Users } from 'lucide-react';

function Profile() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <img
          src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=150&h=150&fit=crop"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 neon-border"
        />
        <h1 className="text-2xl font-bold orbitron">David Chen</h1>
        <p className="text-gray-400">@musicmaster</p>
        
        <div className="flex justify-center space-x-8 mt-4">
          <div className="text-center">
            <div className="font-bold">1.2k</div>
            <div className="text-sm text-gray-400">Following</div>
          </div>
          <div className="text-center">
            <div className="font-bold">8.5k</div>
            <div className="text-sm text-gray-400">Followers</div>
          </div>
          <div className="text-center">
            <div className="font-bold">142</div>
            <div className="text-sm text-gray-400">Posts</div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 mt-6">
          <button className="px-6 py-2 bg-[#f0f]/20 rounded-full hover:bg-[#f0f]/30 transition-colors">
            Edit Profile
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <Settings className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="aspect-square bg-gray-900/50 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
            <img
              src={`https://images.unsplash.com/photo-151137993854${item}-c1f69419868d?w=300&h=300&fit=crop`}
              alt="Music post"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;