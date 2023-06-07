import { forwardRef, LegacyRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../images/codexlogo.png';
import {
  MdCottage,
  MdCategory,
  MdSportsMartialArts,
  MdViewModule,
  MdLocationOn
} from 'react-icons/md';

interface MenuItem {
  to: string;
  path: string;
  icon: JSX.Element;
  name: string;
}

const menuItems: MenuItem[] = [
  { to: '/category', path: '/category', icon: <MdCategory />, name: 'Category' },
  { to: '/skill', path: '/skill', icon: <MdSportsMartialArts />, name: 'Skill' },
  { to: '/modules', path: '/modules', icon: <MdViewModule />, name: 'Modules' },
  { to: '/locations', path: '/locations', icon: <MdLocationOn />, name: 'Locations' }
];

const SideBar = forwardRef(({}, ref: LegacyRef<HTMLDivElement>) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-teal-600 shadow-sm z-10 py-4 px-6">
      <div className="flex justify-center mt-4 mb-4">
        <Image src={logo} alt="company logo" />
      </div>

      <div className="md:flex-col md:min-w-full flex flex-col list-none">
        {menuItems.map((menuItem) => (
          <Link key={menuItem.to} href={menuItem.to}>
            <div
              className={`rounded-sm px-3 py-3 text-xs uppercase font-bold flex items-center ${
                router.pathname === menuItem.path
                  ? 'bg-sky-100 text-sky-600 hover:text-sky-800'
                  : 'text-slate-500 hover:text-slate-400'
              }`}
            >
              <div className="mr-2">{menuItem.icon}</div>
              <div>
                <p>{menuItem.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

SideBar.displayName = 'SideBar';

export default SideBar;
