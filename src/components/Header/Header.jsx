'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (
        currentScrollPosition > lastScrollPosition &&
        currentScrollPosition > 50
      ) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  return (
    <header
      className={`bg-white text-black shadow-lg fixed top-4 left-0 right-0 z-20 mx-auto w-[95%] sm:w-[90%] lg:max-w-6xl rounded-3xl transition-transform duration-300 backdrop-blur-lg ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav
        className="grid grid-cols-2 md:grid-cols-3 items-center p-3 sm:p-3 sm:px-4"
        // style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        <div className="hidden md:flex justify-start space-x-5 text-sm sm:text-lg">
          <Link href="#features" className="hover:text-primary">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-primary">
            Pricing
          </Link>
          <Link href="#how-it-works" className="hover:text-primary">
            How it Works
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex justify-start md:justify-center">
          <Link href="/">
            <Image
              src="/assets/logo/logosingle.svg"
              alt="Logo"
              width={60}
              height={60}
              className="cursor-pointer max-h-[40px] md:max-h-[60px]"
            />
          </Link>
        </div>

        <div className="hidden md:flex justify-end space-x-6 items-center text-sm sm:text-lg">
          <Link href="#" className="hover:text-primary">
            Support
          </Link>
          <Link
            href="https://app.qbicorn.me"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark"
          >
            Try Free
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden text-black focus:outline-none justify-end text-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white text-black shadow-lg rounded-xl mt-2 px-4 py-2">
          <Link href="#features" className="block py-2 hover:text-primary">
            Features
          </Link>
          <Link href="#pricing" className="block py-2 hover:text-primary">
            Pricing
          </Link>
          <Link href="#how-it-works" className="block py-2 hover:text-primary">
            How it Works
          </Link>
          <Link href="#" className="block py-2 hover:text-primary">
            Support
          </Link>
          <Link
            href="https://app.qbicorn.me"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 bg-primary text-white text-center py-2 rounded-full hover:bg-primary-dark"
          >
            Try Free
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
