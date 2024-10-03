import React from "react";
import { useRouter } from "next/navigation";
import { MemeCardProps } from "./types";

const MemeCard: React.FC<MemeCardProps> = ({ meme }) => {
  const router = useRouter();

  return (
    <div className="max-w-sm mx-auto w-full h-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="relative w-full h-48">
        <img
          src={meme.url}
          alt={meme.name}
          className="w-full h-full "
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2 text-center">{meme.name}</h3>
        <button
          onClick={() => router.push(`/edit?url=${meme.url}`)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Edit 
        </button>
      </div>
    </div>
  );
};

export default MemeCard;