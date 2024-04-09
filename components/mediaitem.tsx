"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
  };
  return (
    <div className="flex ">
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-point w-full p-2 hover:bg-neutral-500/50 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image fill src={imageUrl || "/images/liked.png"} alt="Media Item" className="object-cover" priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">
            {data.title}
        </p>
        <p className="text-neutral-400 text-sm truncate">
            {data.author}
        </p>
      </div>
    </div>
    </div>
  );
};

export default MediaItem;
