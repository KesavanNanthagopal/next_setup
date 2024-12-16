'use client';
import { useState } from "react";
import logo from '../../public/logo.png';
import profile from '../../public/profile.jpg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userLoggedIn = false; // Replace with actual authentication logic

  return (
    <header className="bg-white shadow-md flex items-center justify-between px-4 py-2">
    <div className="flex items-center space-x-2">
      <img src={logo.src} alt="Logo" className="h-8 w-8" />
      <span className="font-semibold text-lg">Sample Project</span>
    </div>
  
    <div className="flex items-center space-x-4">
      <div className="relative group">
        <button className="flex items-center space-x-2 focus:outline-none">
          <img
            src={profile.src}
            alt="Profile"
            className="h-8 w-8 rounded-full border border-gray-300"
          />
          <span className="hidden sm:block font-medium">John Doe</span>
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
          <ul className="py-1 text-gray-700">
            <li>
              <a
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="/settings"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Settings
              </a>
            </li>
            <li>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => console.log('Logout clicked')}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  
  );
}
