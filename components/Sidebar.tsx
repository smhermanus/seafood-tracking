"use client"

import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { FaBuilding, FaFile, FaShip, FaUser, FaHome } from "react-icons/fa";
import {AiFillSetting} from "react-icons/ai"
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex w-64 flex-col">
        <div className="flex h-0 flex-1 flex-col bg-white">
          <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
            <div className="mt-2 flex flex-shrink-0 items-center justify-center px-4">
              <Image src={logo} alt="" width={130} height={130} priority />
            </div>
            <nav className="mt-5 flex-1">
              <div className="flex h-14 w-full items-center gap-7 border-b font-bold text-SeaTrackingBlue hover:bg-SeaTrackingBlue hover:text-white">
                <span className="ml-4 flex h-10 w-10 items-center rounded-full bg-LightBlue p-2 hover:text-white">
                  <FaShip size={25} className="hover:text-white" />
                </span>
                <span className="flex flex-wrap">
                  <Link href={"/"} >Skipper submissions</Link>
                  <span className="text-[10px]">Manage Fishing Logs</span>
                </span>
              </div>

              <div className="flex h-14 w-full items-center gap-7 border-b font-bold text-SeaTrackingBlue hover:bg-SeaTrackingBlue hover:text-white">
                <span className="ml-4 flex h-10 w-10 items-center rounded-full bg-LightBlue p-2 hover:text-white">
                  <FaFile size={25} className="hover:text-white" />
                </span>
                <span className="flex flex-col">
                  <Link href={"/permit"}>Permit</Link>
                  <span className="text-[10px]">
                    {" "}
                    View, Edit and Archive Permits
                  </span>
                </span>
              </div>

              <div className="flex h-[120px] w-full items-center gap-7 border-b font-bold text-SeaTrackingBlue hover:bg-SeaTrackingBlue hover:text-white">
                <span className="ml-4 flex h-10 w-10 items-center rounded-full bg-LightBlue p-2 hover:text-white mb-16">
                  <FaUser size={25} className="hover:text-white" />
                </span>
                <div>
                  <span className="flex flex-col mb-1">
                    <Link href={"/admin"}>Admin</Link>
                    <span className="text-[10px]">General Administration</span>
                  </span>
                  <span className="flex gap-2 items-center mb-1">
                    <FaBuilding size={14}/>
                    <Link href={"/admin/company"}>Company</Link>
                  </span>
                  <span className="flex gap-2 items-center mb-1">
                    <FaShip size={14}/>
                    <Link href={"/admin/vessel"}>Vessels</Link>
                  </span>
                  <span className="flex gap-2 items-center mb-1">
                    <FaHome size={14}/>
                    <Link href={"/admin/factory"}>Factory</Link>
                  </span>
                </div>
              </div>

              <div className="flex h-14 w-full items-center gap-7 border-b font-bold text-SeaTrackingBlue hover:bg-SeaTrackingBlue hover:text-white">
                <span className="ml-4 flex h-10 w-10 items-center rounded-full bg-LightBlue p-2 hover:text-white">
                  <AiFillSetting size={25} className="hover:text-white" />
                </span>
                <span className="flex flex-col">
                  <Link href={"/settings"}>Settings</Link>
                  <span className="text-[10px]">Profile and general settings</span>
                </span>
              </div>

            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
