import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  function expandMenuHandler(event) {
    setMenuExpanded(!menuExpanded);
  }

  return (
    <header>
      <div className="container grid grid-rows-2 grid-cols-4  mx-auto container mx-auto p-3 h-10 lg:h-20 lg:grid-cols-5 gap-0 m-10 place-content-center">
        <div className="col-span-3 rows-span-1 lg:col-span-2">
          <h1 className="text-2xl font-bold">Nicholas Lane </h1>
        </div>
        <div className="hidden lg:grid text-zinc-600 col-span-2 grid-cols-4 gap-2 auto-cols-min">
          <div>
            <h1 className="text-lg font-bold hover:text-amber-400 hover:underline underline-offset-8">
              Home
            </h1>
          </div>
          <div>
            <h1 className="text-lg font-bold hover:text-amber-400 hover:underline underline-offset-8">
              Projects
            </h1>
          </div>
          <div>
            <h1 className="text-lg font-bold hover:text-amber-400 hover:underline underline-offset-8">
              Blogs
            </h1>
          </div>
          <div>
            <h1 className="text-lg font-bold hover:text-amber-400 hover:underline underline-offset-8">
              Contact Me
            </h1>
          </div>
        </div>        
        <div className="col-span-1 items-center rows-span-1 lg:hidden">
          <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group"
            onClick={expandMenuHandler}
          >
            <div
              className={`${genericHamburgerLine} ${
                menuExpanded
                  ? "rotate-45 translate-y-3"
                  : ""
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                menuExpanded
                  ? "opacity-0"
                  : ""
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                menuExpanded
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
      </div>
      <div
        className={
          !menuExpanded
            ? "overflow-hidden max-h-0 transition-all ease-in-out duration-500 text-center lg:hidden"
            : "overflow-hidden text-center transition-all ease-in-out duration-500 max-h-72 lg:hidden"
        }
      >
        <h1 className="text-lg font-bold py-2 border-t-2 border-amber-200">
          Home
        </h1>
        <h1 className="text-lg font-bold py-2 border-t-2 border-amber-200">
          Projects
        </h1>
        <h1 className="text-lg font-bold py-2 border-t-2 border-amber-200">
          Blogs
        </h1>
        <h1 className="text-lg font-bold py-2 border-t-2 border-b-2 border-amber-200">
          Contact Me
        </h1>
      </div>
    </header>
  );
}
