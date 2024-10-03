"use client";
import Text from "@/app/Day17/components/Text";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const params = useSearchParams();
  const imageUrl = params.get("url");
  const [count, setCount] = useState(0);
  const memeRef = useRef(null);

  const addText = () => {
    if (count === 5) {
      alert("You can't add more than 5 text elements.");
      return;
    }
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 p-4">
      <div className="w-4/12 p-12 border border-gray-400">
        <div ref={memeRef} className="relative">
          {imageUrl ? (
            <div className="border-4 border-gray-400 rounded-lg">
              <img
                src={imageUrl}
                alt="Param"
                className="object-cover rounded-lg"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ) : (
            <p className="text-gray-500">No image URL provided.</p>
          )}
          <div className="flex flex-col items-center w-full mt-4">
            {Array(count)
              .fill(0)
              .map((_, index) => (
                <Text key={index} />
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
          onClick={() => {
            if (memeRef.current) {
              exportComponentAsJPEG(memeRef);
            } else {
              alert("Meme is not ready for download.");
            }
          }}
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
