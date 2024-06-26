"use client";

import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { FaSpotify } from "react-icons/fa";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
  customColor?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  children,
  className,
  customColor,
}) => {
  const router = useRouter();

  let bgColorClass = "from-emerald-800";
  let mbClass = "mb-4";

  if (customColor) {
    bgColorClass = "bg-[#282828]";
    mbClass = "mb-0";
  }

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b ${bgColorClass} p-6 rounded-t-lg`,
        className
      )}
    >
      <div className={`w-full ${mbClass} flex items-center justify-between`}>
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>


          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>

      
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            onClick={() => router.push("/")}
            className="rounded-full p-2 bg-white flex items-center justify-center cursor-pointer hover:opacity-75 transition"
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            onClick={() => router.push("/search")}
            className="rounded-full p-2 bg-white flex items-center justify-center cursor-pointer hover:opacity-75 transition"
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4 mr-3">
          <div className="flex gap-x-4 items-center">
            <FaSpotify
              onClick={() => router.push("/")}
              className="cursor-pointer hover:opacity-75 transition"
              size={32}
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
