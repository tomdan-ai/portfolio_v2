// components/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-blue-500">
        <nav>
          <div>
            <p>Tom Udoh</p>
          </div>
          <ul className="flex space-x-4">
            <li className="text-red">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white">
              <Link href="/about">About</Link>
            </li>
            <li className="text-white">
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
