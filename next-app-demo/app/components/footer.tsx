'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        {/* Left Content (e.g., Logo or Text) */}
        <div className="text-lg font-semibold">My App</div>
  
        {/* Center Content (e.g., Links or Social Icons) */}
        <div className="hidden sm:flex space-x-6">
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/products" className="hover:text-gray-400">Products</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>
  
        {/* Right Content (e.g., Copyright) */}
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  
  );
}
