import React from 'react';
import type { Chat } from '../types';

interface ChatMessageProps {
  chat: Chat;
  isActive?: boolean;
  onClick?: () => void;
}

export function ChatMessage({ chat, isActive, onClick }: ChatMessageProps) {
  return (
    <div 
      className={`p-4 hover:bg-white/5 cursor-pointer ${isActive ? 'bg-white/5' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <div className="font-semibold">{chat.name}</div>
          <div className="text-sm text-gray-400">{chat.lastMessage}</div>
        </div>
        <div className="text-xs text-gray-500">{chat.time}</div>
      </div>
    </div>
  );
}