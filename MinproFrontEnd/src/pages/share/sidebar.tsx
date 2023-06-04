import { forwardRef ,LegacyRef } from 'react';
import Link from "next/link";
import {  useLocation } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import logo from "../../../public/codex.png"
import {
  MdCottage,
  MdGroup,
  MdShopTwo,
  MdCategory,
  MdLabel,
} from 'react-icons/md';
import { useRouter } from 'next/router';
import Image from 'next/image';

const SideBar = forwardRef(({  }, ref: LegacyRef<HTMLDivElement>) => {



  const router =useRouter()


  const listMenu = [
    { to: '/', 
    path: '/', 
    icon: <MdCottage />, 
    name: 'Category' },

    {
      to: 'skill',
      patch: 'Skill',
      icon: <MdCategory />,
      name: 'Skill',
    },
    {
      to: 'modules',
      patch: 'Modules',
      icon: <MdShopTwo />,
      name: 'Modules',
    },
    { to: 'locations', 
    patch: 'locations', 
    icon: <MdLabel />, 
    name: 'Locations' },
  ];

  return (
    
    <div ref={ref} className="fixed w-56 h-full bg-blue-600 shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <Image
          className="w-32 h-auto transform hover:rotate-180 transition duration-500 ease-in-out"
          src={logo}
          alt="company logo"
        />
        </picture>
      </div>
      <div className="flex flex-col">
        {(listMenu || []).map((mn) => (
          <Link href={`${mn.to}`}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname === mn.path
                  ? 'bg-orange-100 text-orange-500'
                  : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
              }`}
            >
              <div className="mr-2">{mn.icon}</div>
              <div>
                <p>{mn.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center py-5">
</div>

    </div>
  );
});

SideBar.displayName = 'SideBar';

export default SideBar;
