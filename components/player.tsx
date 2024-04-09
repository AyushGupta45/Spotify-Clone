"use client";
import { usePathname } from "next/navigation";
import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import useGetSongById from "@/hooks/useGetSongById";
import PlayerContent from "./playercontent";

const Player = () => {
  const navigation = usePathname();
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  const songUrl = useLoadSongUrl(song!);

  const isPlaylistPath = navigation.includes("playlist");
  const isArtistPath = navigation.includes("artist");

  if (!song || !songUrl || !player.activeId || isPlaylistPath || isArtistPath) {
    return null;
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80] px-4">
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
};

export default Player;



