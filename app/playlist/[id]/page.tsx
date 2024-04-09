"use client";

import Header from "@/components/header";
import { useParams } from "next/navigation";

export default function SpotifyPlaylist() {
  let params = useParams();
  let id = params.id;

  return (
    <div>
      <Header className="pb-0 mb-0" customColor />
      <div className="bg-[#242424] h-[89.5vh] w-full overflow-auto relative mb-0 pb-0 rounded-b-lg">
        <iframe
          style={{ borderRadius: "15px", position: "absolute", top: "-15px" }}
          src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
