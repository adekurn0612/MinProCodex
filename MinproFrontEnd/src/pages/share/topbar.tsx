import { GoThreeBars } from 'react-icons/go';
import { Menu } from '@headlessui/react';
import Image from 'next/image';
import logoKecil from "../../../public/codeid Logo.webp"

export default function TopBar({ showNav, setShowNav }:any) {
  return (
    <div
      className={`bg-blue-600 fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? 'pl-56' : ''
      }`}
    >
      <div className="pl-4 md:pl-16">
        <GoThreeBars
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <img
              src="../../../logo512.png"
              className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
              alt="profile"
            />
          </div>
        </Menu>
      </div>
    </div>
  );
}
