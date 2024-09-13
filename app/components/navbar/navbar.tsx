import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white h-16 text-black shadow-lg flex items-center justify-between md:justify-around px-4 sm:px-6 md:px-8">
    <Link href="/" className="flex items-center">
      <h1 className="font-bold text-xl sm:text-2xl">30 Days Projects</h1>
    </Link>
    <nav>
      <ul className="flex gap-4 font-semibold text-sm md:text-base">
        <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
  
  
  )
}