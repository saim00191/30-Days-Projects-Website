import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white h-16 text-black shadow-lg flex items-center justify-center ">
    <Link href="/" className="flex items-center ">
        <h1 className="font-bold text-xl sm:text-2xl text-center">30 Days Projects</h1>
    </Link>
  </header>
  )
}