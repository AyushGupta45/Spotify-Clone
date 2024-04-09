"use client"

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import useGetSongById from "@/hooks/useGetSongById";
import PlayerContent from "./playercontent";

const Player: React.FC = () => {
  const navigation = usePathname();
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  const songUrl = useLoadSongUrl(song!);

  const [totalDuration, setTotalDuration] = useState<number>(0);

  useEffect(() => {
    const fetchAudioDuration = async () => {
      try {
        const duration = await getAudioDuration(songUrl);
        setTotalDuration(duration);
      } catch (error) {
        console.error("Error fetching audio duration:", error);
      }
    };

    if (songUrl) {
      fetchAudioDuration();
    }
  }, [songUrl]);

  const isPlaylistPath: boolean = navigation.includes("playlist");
  const isArtistPath: boolean = navigation.includes("artist");

  if (!song || !songUrl || !player.activeId || isPlaylistPath || isArtistPath) {
    return null;
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80] px-4">
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} duration={totalDuration}/>
    </div>
  );
};

const getAudioDuration = async (url: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    const audio = new Audio(url);
    audio.onloadedmetadata = () => {
      resolve(audio.duration);
    };
    audio.onerror = reject;
  });
};


export default Player;
