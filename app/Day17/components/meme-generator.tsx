'use client';
import React, { useEffect, useState } from 'react';
import MemeCard from './Card';
import { Meme } from './types';

const MemeGenerator: React.FC = () => {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const fetchMemes = async () => {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      setMemes(data.data.memes);
    };

    fetchMemes();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Meme Generator</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {memes.map((meme) => (
          <div className="flex" key={meme.id}>
            <MemeCard 
              meme={meme} 
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default MemeGenerator;