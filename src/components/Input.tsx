import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export function Input({ className = '', fullWidth = false, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`px-4 py-2 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-[#f0f] ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
    />
  );
}