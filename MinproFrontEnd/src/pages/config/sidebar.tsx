import React, { useState } from 'react';

const Sidebar = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`h-screen overflow-hidden flex items-center justify-center ${isDark ? 'dark' : ''}`} style={{ background: '#edf2f7' }}>
      <style>
        {/* Compiled dark classes from Tailwind */}
        {`.dark .dark\\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
          border-color: rgba(55, 65, 81);
        }
        .dark .dark\\:bg-gray-50 {
          background-color: rgba(249, 250, 251);
        }
        .dark .dark\\:bg-gray-100 {
          background-color: rgba(243, 244, 246);
        }
        .dark .dark\\:bg-gray-600 {
          background-color: rgba(75, 85, 99);
        }
        .dark .dark\\:bg-gray-700 {
          background-color: rgba(55, 65, 81);
        }
        .dark .dark\\:bg-gray-800 {
          background-color: rgba(31, 41, 55);
        }
        .dark .dark\\:bg-gray-900 {
          background-color: rgba(17, 24, 39);
        }
        .dark .dark\\:bg-red-700 {
          background-color: rgba(185, 28, 28);
        }
        .dark .dark\\:bg-green-700 {
          background-color: rgba(4, 120, 87);
        }
        .dark .dark\\:hover\\:bg-gray-200:hover {
          background-color: rgba(229, 231, 235);
        }
        .dark .dark\\:hover\\:bg-gray-600:hover {
          background-color: rgba(75, 85, 99);
        }
        .dark .dark\\:hover\\:bg-gray-700:hover {
          background-color: rgba(55, 65, 81);
        }
        .dark .dark\\:hover\\:bg-gray-900:hover {
          background-color: rgba(17, 24, 39);
        }
        .dark .dark\\:border-gray-100 {
          border-color: rgba(243, 244, 246);
        }
        .dark .dark\\:border-gray-400 {
          border-color: rgba(156, 163, 175);
        }
        .dark .dark\\:border-gray-500 {
          border-color: rgba(107, 114, 128);
        }
        .dark .dark\\:border-gray-600 {
          border-color: rgba(75, 85, 99);
        }
        .dark .dark\\:border-gray-700 {
          border-color: rgba(55, 65, 81);
        }
        .dark .dark\\:border-gray-900 {
          border-color: rgba(17, 24, 39);
        }
        .dark .dark\\:hover\\:border-gray-800:hover {
          border-color: rgba(31, 41, 55);
        }
        .dark .dark\\:text-white {
          color: rgba(255, 255, 255);
        }
        .dark .dark\\:text-gray-50 {
          color: rgba(249, 250, 251);
        }
        .dark .dark\\:text-gray-100 {
          color: rgba(243, 244, 246);
        }
        .dark .dark\\:text-gray-300 {
          color: rgba(209, 213, 219);
        }
        .dark .dark\\:text-gray-500 {
          color: rgba(107, 114, 128);
        }
        .dark .dark\\:text-gray-700 {
          color: rgba(55, 65, 81);
        }
        .dark .dark\\:text-gray-900 {
          color: rgba(17, 24, 39);
        }
        .dark .dark\\:text-red-700 {
          color: rgba(185, 28, 28);
        }
        .dark .dark\\:text-green-700 {
          color: rgba(4, 120, 87);
        }
        .dark .dark\\:focus\\:outline-white:focus {
          outline-color: rgba(255, 255, 255);
        }
        .dark .dark\\:focus\\:border-gray-900:focus {
          outline-color: rgba(17, 24, 39);
        }`}
      </style>
      <div className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className="text-gray-500 dark:text-gray-400">
            {/* Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <div className="flex items-center">
            {/* Search input */}
            <input type="text" className="px-2 py-1 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200" placeholder="Search" />
            {/* Theme toggle button */}
            <button className="ml-4 p-1 rounded-md bg-gray-100 focus:outline-none" onClick={toggleTheme}>
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 4.243C6.133 4.243 3 7.376 3 11.243c0 3.866 3.133 7 7 7s7-3.134 7-7c0-3.867-3.133-6.999-7-6.999zM10 18.243c-3.589 0-6.5-2.91-6.5-6.5S6.411 5.243 10 5.243s6.5 2.91 6.5 6.5-2.911 6.5-6.5 6.5z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 4.243C6.133 4.243 3 7.376 3 11.243c0 3.866 3.133 7 7 7s7-3.134 7-7c0-3.867-3.133-6.999-7-6.999zM10 18.243c-3.589 0-6.5-2.91-6.5-6.5S6.411 5.243 10 5.243s6.5 2.91 6.5 6.5-2.911 6.5-6.5 6.5zm0-11.498c-2.206 0-3.999 1.791-3.999 3.999s1.793 3.999 3.999 3.999 3.999-1.793 3.999-3.999S12.206 6.745 10 6.745zm0 6.999c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Sidebar content */}
        <div className="px-4 py-2">
          <a href="#" className="block text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md py-1 px-2">Dashboard</a>
          <a href="#" className="mt-2 block text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md py-1 px-2">Projects</a>
          <a href="#" className="mt-2 block text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md py-1 px-2">Team</a>
          <a href="#" className="mt-2 block text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md py-1 px-2">Tasks</a>
          <a href="#" className="mt-2 block text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md py-1 px-2">Calendar</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
