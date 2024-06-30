import React, { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import LanguageModal from "./LanguageModal";
import { MdCleaningServices } from "react-icons/md";

function Header() {
  const [showModal, setModal] = useState(false);
  const handleOnClose = () => setModal(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const handleShowUserMenu = () => {
    setShowUserMenu((prevState) => !prevState);
    console.log(`${showUserMenu}`);
  };

  return (
    <div>
      <div className="w-full flex  items-center justify-between p-7">
        <div className="logo-area">
          <a
            href="/"
            className="text-3xl font-bold text-rose-500 cursor-pointer"
          >
            WANDERWAVE
          </a>
        </div>

        <div className="menu-area flex items-center gap-5">
          <svg
            onClick={() => setModal(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[30%] p-1 size-8 shadow-sm transition-all hover:bg-slate-100 hover:shadow-2xl rounded-full cursor-pointer delay-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <LanguageModal onClose={handleOnClose} visible={showModal} />

          <div className="flex flex-col items-center w-full relative">
            <div
              className="w-full avatar-section flex
              items-center justify-center px-4 py-2 rounded-full shadow-sm cursor-pointer border border-gray-300 hover:shadow-md transition delay-5"
              onClick={handleShowUserMenu}
            >
              {/* buger menu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* avataricon */}
              <RxAvatar className="ml-4 text-2xl" />
            </div>

            {/* ! dropwdown */}
            {showUserMenu ? (
              <div className="absolute top-[100%] mt-2 w-64 min-w-full right-0 shadow-lg border rounded-xl overflow-hidden">
                <p className="hover:bg-gray-200 cursor-pointer px-5 py-3 duration-300">
                  Sign up
                </p>
                <p className="hover:bg-gray-200 cursor-pointer px-5 py-3 duration-300">
                  Login
                </p>
                <p className="hover:bg-gray-200 cursor-pointer px-5 py-3 duration-300">
                  Gift Card
                </p>
                <p className="hover:bg-gray-200 cursor-pointer px-5 py-3 duration-300">
                  Your Home
                </p>
                <p className="hover:bg-gray-200 cursor-pointer px-5 py-3 duration-300">
                  Help Center
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
