import React from 'react';
import { PostCard } from '../components/PostCard';
import type { Post } from '../types';

const posts: Post[] = [
  {
    id: 1,
    username: "JazzMaster",
    avatar: "https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=150&h=150&fit=crop",
    video: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=400&fit=crop",
    likes: 1234,
    comments: 89,
    description: "New jazz fusion piece! Let me know what you think 🎷✨"
  },
  {
    id: 2,
    username: "RockLegend",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    video: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=800&h=400&fit=crop",
    likes: 2567,
    comments: 143,
    description: "Guitar solo from last night's show 🎸🔥"
  }
];

function Home() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;