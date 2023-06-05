import { forwardRef, LegacyRef, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import logo from "../../images/codexlogo.png";
import { MdCottage, MdCategory, MdViewModule, MdLocationOn, MdSportsMartialArts, } from 'react-icons/md'
import { useEffect } from "react";
import jwt from 'jsonwebtoken'


const SideBar = forwardRef(({}, ref: LegacyRef<HTMLDivElement>) => {
  const [listMenu, setListMenu]=useState([{ to: '/', path: '/', icon:<MdCottage/>, name:'Home'}])
  let token:any;
  useEffect(()=>{
        setListMenu([
          { to: '/', path: '/', icon:<MdCategory/>, name:'category'},
          { to: '/skill', path: '/skill', icon:<MdSportsMartialArts/>, name:'Skill'},
          { to: '/modules', path: '/modules', icon:<MdViewModule/>, name:'Modules'},
          { to: '/locations', path: '/locations', icon:<MdLocationOn/>, name:'Locations'}
          ])
    console.log(listMenu);
  },[])
    const router = useRouter()
  
  return (
    <div ref={ref} className="fixed w-56 h-full bg-slate-900 shadow-sm z-10 py-4 px-6">
      <div className="flex justify-center mt-4 mb-4">
          <Image
            className="w-full h-auto"
            src={logo}
            alt="company logo"
          />
      </div>

      <div className="md:flex-col md:min-w-full flex flex-col list-none">
        {(listMenu || []).map((mn)=>(
          <Link href={`${mn.to}`}>
              <div
                  className={`rounded-sm px-3 py-3 text-xs uppercase font-bold flex items-center ${router.pathname == mn.path
                      ? "bg-sky-100 text-sky-600 hover:text-sky-800"
                      : "text-slate-500 hover:text-slate-400"
                  }`}
              >
                  <div className="mr-2">
                      {mn.icon}
                  </div>
                  <div>
                      <p>{mn.name}</p>
                  </div>
              </div>
          </Link>)
        )}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
