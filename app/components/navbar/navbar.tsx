import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white h-16 text-black shadow-lg flex items-center justify-between md:justify-around px-4 sm:px-6 md:px-8">
    <Link href="/" className="flex items-center">
      <h1 className="font-bold text-xl sm:text-2xl">30 Days Projects</h1>
    </Link>
  </header>
  )
}