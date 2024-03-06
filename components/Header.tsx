// components/Header.tsx
import React from "react";
import Link from "next/link";
import tom from "../public/images/tom.png"
import workspace from "../public/images/workspace.jpg"
import Image from "next/image";

const Header: React.FC = () => {
  const imageUrl = "./GH.jpeg";

  return (
    <>
      <header className="bg-blue-gray-900">
        <nav className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
          <div className="flex items-center">
            <p className="bg-DED7CF text-black text-xl font-bold pr-4 border-r border-gray-700">Tom Udoh</p>
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
      <section className="grid grid-cols-3 "> {/* Grid for three uneven sets */}


      {/* SET ONE */}

        <div className="bg-gray-200 p-4  shadow-md relative h-screen"
        style={{
          height: '63.4vh'
        }}
        > {/* Box 1, Set 1 */}
          <h2>Box 1 Title</h2>
          <Image
            src={tom}
            alt="Your image description"
            layout="fill"
            className="object-cover "
          /> 
        </div>
        <div className="bg-gray-300 p-4  shadow-md"> {/* Box 2, Set 1 */}
          <div className="flex flex-col mt-56">
          <h2 className="text-3xl text-center">HI, i'm Tom Daniel</h2>

          <p className="text-2xl text-center">
a content strategist, design fiend, conceptual creative, brand magician & killer storyteller. .</p>
          </div>
          <p className="text-xl text-center mt-56">

          <Link href="/about">About Me</Link>
          </p>
        </div>
        <div className="bg-gray-400 p-4  shadow-md"> {/* Box 3, Set 1 */}
        <div className="flex flex-col mt-56">
          <p className="text-2xl text-center">Chek out my amazing studio</p>
          <h2 className="text-center mt-72 text-xl">My workspace</h2>
        </div>
        </div>

{/* SET TWO*/}

        <div className="bg-indigo-200 p-4  shadow-md h-70"
        
        style={{
          height: '50vh'
        }}
        > {/* Box 1, Set 2 */}
          <h2>Box 4 Title</h2>
          <p>This is another set of boxes!</p>
        </div>
        <div className="bg-indigo-300 p-4  shadow-md h-50"> {/* Box 2, Set 2 */}
          <h2>Box 5 Title</h2>
          <p>Content can vary in length.</p>
        </div>
        <div className="bg-slate-950 p-4  shadow-md"> {/* Box 3, Set 1 */}
          <h2>Box 3 Title</h2>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget dui.</p>
        </div>

        <div className="bg-teal-200 p-4  shadow-md h-60"
        
        style={{
          height: '50vh'
        }}> {/* Box 1, Set 3 */}
          <h2>Box 7 Title</h2>
          <p>Use different colors for sets.</p>
        </div>
        <div className="bg-gray-400 p-4  shadow-md"> {/* Box 3, Set 1 */}
          <h2>Box 3 Title</h2>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget dui.</p>
        </div>
        <div className="bg-teal-400 p-4  shadow-md h-50"> {/* Box 3, Set 3 */}
          <h2>Box 9 Title</h2>
          <p>Let's build a great portfolio!</p>
        </div>
        <div className="bg-slate-950 p-4  shadow-md h-60"
        
        style={{
          height: '50vh'
        }}> {/* Box 1, Set 3 */}
          <h2>Box 7 Title</h2>
          <p>Use different colors for sets.</p>
        </div>
        <div className="bg-red-500 p-4  shadow-md"> {/* Box 3, Set 1 */}
          <h2>Box 3 Title</h2>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget dui.</p>
        </div>
        <div className="bg-slate-400 p-4  shadow-md h-50"> {/* Box 3, Set 3 */}
          <h2>Box 9 Title</h2>
          <p>Let's build a great portfolio!</p>
        </div>
      </section>
    </>
  );
};

export default Header;
