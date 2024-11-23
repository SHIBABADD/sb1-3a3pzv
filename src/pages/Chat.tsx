import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { ChatMessage } from '../components/ChatMessage';
import { Input } from '../components/Input';
import type { Chat } from '../types';

const chats: Chat[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    lastMessage: "Loved your latest track! 🎵",
    time: "2m ago"
  },
  {
    id: 2,
    name: "Mike Williams",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    lastMessage: "When are you releasing the new album?",
    time: "1h ago"
  }
];

function Chat() {
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState(chats[0]);

  return (
    <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-xl neon-border overflow-hidden">
      <div className="grid grid-cols-3 h-[600px]">
        <div className="border-r border-white/10">
          <div className="p-4">
            <Input
              type="text"
              placeholder="Search messages..."
              fullWidth
              className="rounded-full"
            />
          </div>
          
          <div className="space-y-2">
            {chats.map(chat => (
              <ChatMessage
                key={chat.id}
                chat={chat}
                isActive={activeChat.id === chat.id}
                onClick={() => setActiveChat(chat)}
              />
            ))}
          </div>
        </div>
        
        <div className="col-span-2 flex flex-col">
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full" />
              <div className="font-semibold">{activeChat.name}</div>
            </div>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Messages would go here */}
          </div>
          
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                fullWidth
                className="rounded-full"
              />
              <button className="p-2 rounded-full hover:bg-[#f0f]/20 transition-colors">
                <Send className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;