import React, { useState } from 'react';
import { Upload as UploadIcon, Music, Video } from 'lucide-react';
import { Input } from '../components/Input';

function Upload() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold orbitron text-center mb-8 neon-text">Upload Your Music</h1>
      
      <div
        className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
          dragActive ? "border-[#f0f] bg-[#f0f]/5" : "border-white/20 hover:border-[#f0f]"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrag}
      >
        <UploadIcon className="w-16 h-16 mx-auto mb-4 text-[#f0f]" />
        <p className="text-xl mb-2">Drag and drop your file here</p>
        <p className="text-gray-400 mb-4">or</p>
        <button className="px-6 py-3 bg-[#f0f]/20 rounded-full hover:bg-[#f0f]/30 transition-colors">
          Choose File
        </button>
        
        <div className="mt-8 text-sm text-gray-400">
          Supported formats: MP4, MOV (video) / MP3, WAV (audio)
        </div>
      </div>
      
      <div className="mt-8 space-y-4">
        <Input
          type="text"
          placeholder="Title"
          fullWidth
        />
        
        <textarea
          placeholder="Description"
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-[#f0f]"
        />
        
        <div className="flex justify-between items-center">
          <div className="space-x-4">
            <button className="px-4 py-2 rounded-full border border-white/10 hover:border-[#f0f] transition-colors">
              <Music className="h-5 w-5 inline-block mr-2" />
              Add Tags
            </button>
            <button className="px-4 py-2 rounded-full border border-white/10 hover:border-[#f0f] transition-colors">
              <Video className="h-5 w-5 inline-block mr-2" />
              Add Cover
            </button>
          </div>
          
          <button className="px-8 py-3 bg-[#f0f]/20 rounded-full hover:bg-[#f0f]/30 transition-colors font-semibold">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;