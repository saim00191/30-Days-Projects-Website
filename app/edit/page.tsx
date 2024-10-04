"use client";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
import Image from 'next/image';

// Dynamically import the Text component to ensure it only runs on the client side
const DynamicText = dynamic(() => import('@/app/Day17/components/Text'), { ssr: false });

const EditPage = () => {
  const params = useSearchParams();
  const imageUrl = params.get("url");
  const [count, setCount] = useState(0);
  const memeRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const addText = () => {
    if (count === 5) {
      alert("You can't add more than 5 text elements.");
      return;
    }
    setCount(count + 1);
  };

  const handleDownload = () => {
    if (memeRef.current) {
      exportComponentAsJPEG(memeRef);
    } else {
      alert("Meme is not ready for download.");
    }
  };

  // Prevent rendering on the server
  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 p-4">
      <div className="w-4/12 p-12 border border-gray-400">
        <div ref={memeRef} className="relative">
          {imageUrl ? (
            <div className="border-4 border-gray-400 rounded-lg">
              <Image
                src={imageUrl}
                alt="Param"
                className="object-cover rounded-lg"
                layout="responsive"
                width={500} // Adjust width as necessary
                height={300} // Adjust height as necessary
              />
            </div>
          ) : (
            <p className="text-gray-500">No image URL provided.</p>
          )}
          <div className="flex flex-col items-center w-full mt-4">
            {Array(count)
              .fill(0)
              .map((_, index) => (
                <DynamicText key={index} />
              ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-md mt-4">
        <button
          onClick={addText}
          className="w-full p-4 my-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
        >
          Add Text
        </button>
        <button
          onClick={handleDownload}
          className="w-full p-4 my-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
        >
          Download Meme
        </button>
        <Link href={"/"}>
          <button className="w-full p-4 my-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditPage;
