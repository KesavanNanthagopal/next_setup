'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userLoggedIn = false; // Replace with actual authentication logic

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="text-xl font-bold text-blue-600">MyApp</a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">
            <a className="text-gray-600 hover:text-blue-600">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-600 hover:text-blue-600">About</a>
          </Link>
          <Link href="/services">
            <a className="text-gray-600 hover:text-blue-600">Services</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-600 hover:text-blue-600">Contact</a>
          </Link>
        </nav>

        {/* Auth Buttons or User Profile */}
        <div className="hidden md:flex items-center space-x-4">
          {userLoggedIn ? (
            <div className="relative">
              <button
                className="flex items-center space-x-2 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <img
                  src="/user-avatar.png"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-600">John Doe</span>
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                  <Link href="/profile">
                    <a className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                      Profile
                    </a>
                  </Link>
                  <Link href="/settings">
                    <a className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                      Settings
                    </a>
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => console.log("Log out")}
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login">
                <a className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100">
                  Login
                </a>
              </Link>
              <Link href="/register">
                <a className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                  Sign Up
                </a>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="absolute top-14 left-0 w-full bg-white border-t md:hidden">
            <Link href="/">
              <a className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                About
              </a>
            </Link>
            <Link href="/services">
              <a className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Services
              </a>
            </Link>
            <Link href="/contact">
              <a className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Contact
              </a>
            </Link>
            {userLoggedIn ? (
              <>
                <Link href="/profile">
                  <a className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                    Profile
                  </a>
                </Link>
                <Link href="/settings">
                  <a className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                    Settings
                  </a>
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => console.log("Log out")}
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <a className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                    Login
                  </a>
                </Link>
                <Link href="/register">
                  <a className="block px-4 py-2 text-blue-600 hover:bg-blue-100">
                    Sign Up
                  </a>
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
