"use client";
import { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { GrResume } from "react-icons/gr";
import { BiReset } from "react-icons/bi";
import bgImage from "../bgImage/bgImage.jpg";
import Link from "next/link";

export default function CountDownTimer() {
  const [targetDate, setTargetDate] = useState<number | string>("");
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const intervalRef = useRef<ReturnType<typeof setInterval> | number | null>(
    null
  );

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current as number);
            setTargetDate("");
            setMessage("Times Up!");
            setTimeout(() => setMessage(""), 2000);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current as number);
    }

    return () => clearInterval(intervalRef.current as number);
  }, [isActive, isPaused]);

  const calculateRemainingTime = () => {
    const currentTime = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const diff = Math.floor((targetTime - currentTime) / 1000);
    setRemainingTime(diff > 0 ? diff : 0);
  };

  const handleStart = () => {
    if (targetDate) {
      calculateRemainingTime();
      setIsActive(true);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    if (isActive) {
      setIsPaused(!isPaused);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current as number);
    intervalRef.current = null;
    setIsActive(false);
    setIsPaused(false);
    setRemainingTime(0);
    setTargetDate("");
    setMessage("");
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen px-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        {/* Header */}
        <h1 className="text-white text-center mb-4 uppercase text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Count Down <span className="text-yellow-600">Timer</span>
        </h1>

        {/* Timer Container */}
        <div className="border-[7px] border-white rounded-2xl shadow-xl p-8 sm:py-16 sm:px-10 bg-gray-900 bg-opacity-70">
          <div className="border-[3px] border-gray-300 rounded mb-6">
            <input
              type="datetime-local"
              onChange={(e) => setTargetDate(e.target.value)}
              value={targetDate}
              disabled={isActive && isPaused}
              className="text-gray-800 bg-white uppercase text-center font-bold w-full p-3 text-lg sm:text-xl "
            />
          </div>

          {/* Timer Display */}
          <div className="text-5xl sm:text-6xl md:text-7xl text-white font-mono mb-6">
            <h1 className="font-bold">{formatTime(remainingTime)}</h1>
          </div>

          {/* Times Up Message */}
          {message && (
            <p className="text-red-600 font-semibold text-center mb-6 text-2xl">
              {message}
            </p>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded flex justify-center items-center"
              onClick={handleStart}
            >
              Start
              <span className="ml-2">
                <FaArrowAltCircleUp />
              </span>
            </button>

            <button
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded flex justify-center items-center"
              onClick={handlePause}
            >
              {isPaused ? (
                <>
                  Resume
                  <span className="ml-2">
                    <GrResume />
                  </span>
                </>
              ) : (
                <>
                  Pause
                  <span className="ml-2">
                    <FaCirclePause />
                  </span>
                </>
              )}
            </button>

            <button
              className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded flex justify-center items-center"
              onClick={handleReset}
            >
              Reset
              <span className="ml-2">
                <BiReset />
              </span>
            </button>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="flex justify-center text-white text-center mt-6 text-xl">
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </>
  );
}
