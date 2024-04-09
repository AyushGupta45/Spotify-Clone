"use client"

import { useParams } from "next/navigation";

export default function SpotifyPlaylist() {
  let params = useParams();
  let id = params.id;

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      {id ? (
        <iframe
          style={{ borderRadius: "12px" }}
          src={`https://open.spotify.com/embed/artist/${id}?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ) : (
        <div className="mt-2 mb-7 px-6">Invalid Playlist</div>
      )}
    </div>
  );
}
