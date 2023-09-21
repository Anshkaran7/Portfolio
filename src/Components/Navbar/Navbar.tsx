import Image from "next/image";
import { navLinks } from "./links";

import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { useState } from "react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    // main
    <nav className="sticky w-[100%] top-0 left-0 z-[99] bg-opacity-40 py-2 px-0">

      <div className="my-0 mx-auto w-[90%] flex justify-between">
        {/* logo */}
        <div className="items-center flex flex-row justify-center">
          <Image
            src={"/assets/logo.png"}
            alt="logo"
            width={50}
            height={50}
            className="image w-16 h-16  hover:scale-110 cursor-pointer"
          />
          {/* logo text */}
          <a
            href="#"
            className="text-xl font-medium mt-3 ml-2 text-white hover:rotate-6"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            Karan<span className="font-bold text-pink-400">.Dev</span>
          </a>
        </div>
        {/*desktop view -- nav elements  */}
        <ul className="flex gap-6 max-sm:hidden ">
          {navLinks.map((navlink) => {
            const { title, url } = navlink;
            return (
              <li className="flex  items-center  ">
                <a
                  className="py-1 px-3 pb-[6px] items-center justify-center rounded text-white hover:text-pink-500 dark:hover:bg-neutral-700/20 font-semibold"
                  href={url}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>

        {/* for mobile view--- toogle icon */}
        <div className="flex flex-col sm:hidden ">
          <button
            onClick={toggleMenu}
            className={`nav-menu ${isMenu ? "close" : "open"}`}
            aria-label="nav-menu-btn"
          ></button>

          {/* for mobile view--- nav elements */}
          <div className={isMenu ? 'mobile-menu active bg-pink-600' : 'mobile-menu inactive bg-pink-600'}>
            <div className="mobile-links">
              {navLinks.map((navlink) => {
                const { title, url } = navlink;
                return (
                  <a className="text-white hover:text-black font-semibold" onClick={toggleMenu} href={url}>
                    {title}
                  </a>
                );
              })}
            </div>

            <ul className="wrapper flex list-none">
              <li className="icon linkedin">
                <a href="https://www.linkedin.com/in/karan-kumar-416321239/" target="_blank" rel="noopener noreferrer">
                  <span className="tooltip">LinkedIn</span>
                  <span>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                </a>
              </li>
              <li className="icon github">
                <a href="https://github.com/Anshkaran7" target="_blank" rel="noopener noreferrer">
                  <span className="tooltip">Github</span>
                  <span>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </a>
              </li>
              <li className="icon twitter">
                <a href="https://twitter.com/itsmeekaran" target="_blank" rel="noopener noreferrer">
                  <span className="tooltip">Twitter</span>
                  <span>
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
