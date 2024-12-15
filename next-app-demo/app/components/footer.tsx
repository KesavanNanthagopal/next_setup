'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex-1">
            <Link href="/">
              <a className="text-2xl font-bold text-blue-400">MyApp</a>
            </Link>
            <p className="mt-2 text-gray-400">
              Empowering users with seamless web solutions. Join us and explore
              our services.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-white">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-white">About</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-300 hover:text-white">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-white">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-400">Contact Us</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-gray-300">
                <i className="fas fa-map-marker-alt mr-2"></i> 123 Main Street,
                City, Country
              </li>
              <li className="text-gray-300">
                <i className="fas fa-phone-alt mr-2"></i> +123 456 7890
              </li>
              <li className="text-gray-300">
                <i className="fas fa-envelope mr-2"></i>{" "}
                support@myapp.com
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-400">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
