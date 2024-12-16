import { HomeIcon, InformationCircleIcon, ShoppingBagIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-[85vh]  bg-gray-100 p-4 shadow-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My App</h1>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-2"
            >
              <HomeIcon className="h-6 w-6" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-2"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-2"
            >
              <InformationCircleIcon className="h-6 w-6" />
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
