export interface Post {
  id: number;
  userId: string;
  username: string;
  avatar: string;
  video: string;
  likes: number;
  comments: number;
  description: string;
  isLiked?: boolean;
}

export interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  bio?: string;
  followers: number;
  following: number;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  content: string;
  timestamp: string;
}