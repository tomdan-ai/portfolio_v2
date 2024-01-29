// components/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-blue w-80 h-24">
                <nav className="flex gap-x-2.5 border-b-4 border-indigo-500">
          <div className="border-solid border-2 border-sky-500">
            <p>Tom Udoh</p>
          </div>
          <ul className="flex space-x-4">
            <li className="text-red">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black">
              <Link href="/about">About</Link>
            </li>
            <li className="text-black">
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
