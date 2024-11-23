import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import type { Post, Comment } from '../types';
import { Input } from './Input';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      userId: '1',
      username: 'You',
      avatar: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=150&h=150&fit=crop',
      content: comment,
      timestamp: new Date().toISOString()
    };

    setComments([newComment, ...comments]);
    setComment('');
  };

  return (
    <div className="bg-gray-900/50 rounded-xl overflow-hidden neon-border">
      <div className="p-4 flex items-center space-x-3">
        <Link to={`/profile/${post.userId}`}>
          <img src={post.avatar} alt={post.username} className="w-10 h-10 rounded-full" />
        </Link>
        <Link to={`/profile/${post.userId}`} className="font-semibold hover:text-[#f0f]">
          {post.username}
        </Link>
      </div>
      
      <img src={post.video} alt="Video thumbnail" className="w-full aspect-video object-cover" />
      
      <div className="p-4 space-y-3">
        <div className="flex items-center space-x-4">
          <button 
            className={`flex items-center space-x-1 transition-colors ${isLiked ? 'text-[#f0f]' : 'hover:text-[#f0f]'}`}
            onClick={handleLike}
          >
            <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
            <span>{likesCount}</span>
          </button>
          
          <button 
            className="flex items-center space-x-1 hover:text-[#0ff] transition-colors"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle className="h-6 w-6" />
            <span>{comments.length}</span>
          </button>
          
          <button className="flex items-center space-x-1 hover:text-[#f0f] transition-colors">
            <Share2 className="h-6 w-6" />
          </button>
        </div>
        
        <p className="text-sm text-gray-300">{post.description}</p>

        {showComments && (
          <div className="space-y-4 mt-4">
            <form onSubmit={handleComment} className="flex space-x-2">
              <Input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                fullWidth
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-[#f0f]/20 rounded-full hover:bg-[#f0f]/30 transition-colors"
              >
                Post
              </button>
            </form>

            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <img src={comment.avatar} alt={comment.username} className="w-8 h-8 rounded-full" />
                  <div>
                    <Link to={`/profile/${comment.userId}`} className="font-semibold hover:text-[#f0f]">
                      {comment.username}
                    </Link>
                    <p className="text-sm text-gray-300">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}