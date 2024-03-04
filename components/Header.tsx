// components/Header.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const imageUrl = "./GH.jpeg";

  return (
    <>
      <header className="bg-blue-gray-900">
        <nav className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
          <div className="flex items-center">
            <p className="text-black text-xl font-bold pr-4 border-r border-gray-700">Tom Udoh</p>
          </div>
          <ul className="flex space-x-4">
            <li className="text-black hover:text-gray-200 pl-4 ">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black hover:text-gray-200 pl-4 ">
              <Link href="/about">About</Link>
            </li>
            <li className="text-black hover:text-gray-200 pl-4">
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="grid grid-cols-3 gap-4"> {/* Grid for three uneven sets */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md relative"> {/* Box 1, Set 1 */}
          <h2>Box 1 Title</h2>
          <Image
            src="/GH.jpeg"
            alt="Your image description"
            layout="fill" // Fills the container while maintaining aspect ratio
            className="object-cover rounded-lg" // Maintains aspect ratio, adds rounded corners
          /> {/* Use Next.js Image component */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod magna eget magna aliquam tincidunt.</p>
        </div>
        <div className="bg-gray-300 p-4 rounded-lg shadow-md"> {/* Box 2, Set 1 */}
          <h2>Box 2 Title</h2>
          <p>Donec nec diam dui. Donec eu elit quam. Sed posuere consectetur est at lobortis.</p>
        </div>
        <div className="bg-gray-400 p-4 rounded-lg shadow-md"> {/* Box 3, Set 1 */}
          <h2>Box 3 Title</h2>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget dui.</p>
        </div>
        <div className="bg-indigo-200 p-4  shadow-md h-70"> {/* Box 1, Set 2 */}
          <h2>Box 4 Title</h2>
          <p>This is another set of boxes!</p>
        </div>
        <div className="bg-indigo-300 p-4  shadow-md h-50"> {/* Box 2, Set 2 */}
          <h2>Box 5 Title</h2>
          <p>Content can vary in length.</p>
        </div>
        <div className="bg-indigo-400 p-4  shadow-md h-60"> {/* Box 3, Set 2 */}
          <h2>Box 6 Title</h2>
          <p>Tailwind helps with styling!</p>
        </div>

        <div className="bg-teal-200 p-4  shadow-md h-60"> {/* Box 1, Set 3 */}
          <h2>Box 7 Title</h2>
          <p>Use different colors for sets.</p>
        </div>
        <div className="bg-teal-300 p-4  shadow-md h-80"> {/* Box 2, Set 3 */}
          <h2>Box 8 Title</h2>
          <p>Content can be anything you want.</p>
        </div>
        <div className="bg-teal-400 p-4  shadow-md h-50"> {/* Box 3, Set 3 */}
          <h2>Box 9 Title</h2>
          <p>Let's build a great portfolio!</p>
        </div>
      </section>
    </>
  );
};

export default Header;
