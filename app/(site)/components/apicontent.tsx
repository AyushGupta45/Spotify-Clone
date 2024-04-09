"use client";

import PlayButton from "@/components/playbutton";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ApiContentProps {
  image: string;
  name: string;
  href: string;
  artist?: string;
}

const ApiContent: React.FC<ApiContentProps> = ({
  image,
  artist,
  name,
  href,
}) => {
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  };

  return (
    <div
      onClick={onClick}
      className="
        relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-3
      "
    >
      <div
        className={`
    relative 
    aspect-square 
    w-full 
    h-full 
    ${!artist ? "rounded-full" : "rounded-md"}
    overflow-hidden
  `}
      >
        <Image className="object-cover" fill src={image} alt="image" priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
      <div className="flex flex-col w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full text-start">{name}</p>
        {artist && (
          <p className="text-neutral-400 text-start text-sm pb-2 w-full truncate">
            {artist}
          </p>
        )}
      </div>
      <div
        className="
          absolute 
          bottom-24 
          right-5
        "
      >
        <PlayButton />
      </div>
    </div>
  );
};

export default ApiContent;
