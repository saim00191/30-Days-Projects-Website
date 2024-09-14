'use client'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from 'react';
import Link from 'next/link';

export default function MainPage() {
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className="mx-12 mt-8 grid grid-cols-1 gap-8 bg-white sm:grid-cols-2 md:grid-cols-3 mb-4">
      {Array.from({ length: 30 }).map((_, index) => (
        <Link href={index < 9 ? `/Day0${index + 1}` : `/Day${index + 1}`} key={index}>
          <div
            className="p-12 border-3 border-blue-800 border-[5px] m-2 bg-white flex items-center justify-center cursor-pointer hover:bg-blue-100"
            data-aos="fade-up" // Add AOS attribute for animation
          >
            <h1 className="font-bold text-black">{index < 9 ? `Day0${index + 1}` : `Day-${index + 1}`}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}
