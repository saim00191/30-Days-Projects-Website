"use client";
import { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { GrResume } from "react-icons/gr";
import { BiReset } from "react-icons/bi";
import bgImage from "../bgImage/bgImage.jpg";
import Link from 'next/link'

export default function CountDownTimer() {
  //useState is a React hook that lets you add state variables to functional components and provides functions to update them.
  const [targetDate, setTargetDate] = useState<number | string>("");
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [message , setMessage] = useState<string>("")

  //useRef creates a mutable object that persists across renders, allowing you to store a reference to a DOM element or a value.
  const intervalRef = useRef<ReturnType<typeof setInterval> | number | null>(
    null
  );


  //useEffect is a React hook that performs side effects in function components, allowing you to run code after render and manage cleanup.
  useEffect(() => {
    if (isActive && !isPaused) {
      //setInterval is a JavaScript function that repeatedly executes a specified callback function at fixed time intervals,
      //expressed in milliseconds.It continues running until stopped with clearInterval()
      intervalRef.current = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current as number); // Type assertion to ensure it's a number
            setTargetDate("");
            setMessage("Times Up!"); // Show error message
            setTimeout(() => setMessage(""), 2000); 
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current as number);
    }

    return () => clearInterval(intervalRef.current as number); // Clean up the interval on component unmount
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
    clearInterval(intervalRef.current as number); // Clear the interval
    intervalRef.current = null; // Reset the ref to null
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
        className="flex flex-col  items-center justify-center min-h-screen px-4" // Added padding for mobile responsiveness
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <h1
          className={`text-white text-center mb-2 uppercase text-3xl sm:text-4xl font-extrabold`}
        >
          Count Down <span className="text-yellow-600">Timer</span>
        </h1>

        <div className="border-[7px] border-white rounded-2xl shadow-xl px-9 py-16 sm:py-24 sm:px-12 ">
          <div className="border-[3px] rounded">
            <input
              type="datetime-local"
              onChange={(e) => setTargetDate(e.target.value)}
              value={targetDate}
              disabled={isActive && isPaused}
              className={`text-gray-800 uppercase text-center font-bold w-full outline-none p-2`} // Added padding for better touch target on mobile
            />
          </div>
          <div className="text-[50px] sm:text-[60px] text-white font-mono mx-3  sm:mx-11 md:mx-[50px]  mb-6 mt-4">
            <h1 className=" text-[70px] font-bold">{formatTime(remainingTime)}</h1>
          </div>
          {message && <p className="text-red-600 font-semibold text-center mx-auto mb-8 text-2xl">{message}</p>}
          <div className="flex flex-col sm:flex-row gap-4 md:ml-3 ">
            <button
              className="btn btn-primary font-bold bg-green-700 outline-none border-none hover:bg-green-900 px-4 py-2 text-lg sm:text-xl" // Adjusted padding and text size for better mobile view
              onClick={handleStart}
            >
              Start
              <span>
                <FaArrowAltCircleUp />
              </span>
            </button>
            <button
              className="btn  btn-primary font-bold bg-blue-700 outline-none border-none hover:bg-blue-900 px-4 py-2 text-lg sm:text-xl"
              onClick={handlePause}
            >
              <div className="flex flex-row">
                {isPaused ? (
                  <h1 className="flex gap-2 text-[16px]">
                    Resume
                    <span className="mt-[6px]">
                      <GrResume />
                    </span>
                  </h1>
                ) : (
                  <h1 className="flex gap-2">
                    Pause
                    <span className="mt-[5px]">
                      <FaCirclePause />
                    </span>
                  </h1>
                )}
              </div>
            </button>
            <button
              className="btn btn-primary font-bold bg-red-700 outline-none border-none hover:bg-red-900 px-4 py-2 text-lg sm:text-xl"
              onClick={handleReset}
            >
              Reset{" "}
              <span>
                <BiReset />
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-center text-2xl text-white text-center mt-6">
          <Link href='/'>
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
