import getSongs from "@/actions/getSongs";
import Header from "@/components/header";
import ListItem from "@/components/listitem";
import PageContent from "./components/pagecontent";
import ApiContent from "./components/apicontent";
import { artists, charts, playlists } from "@/hooks/constants";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
        <h1 className="text-white text-3xl font-bold hover:underline transition cursor-pointer">Welcome Back</h1>
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-4
              3xl:grid-cols-4
              gap-5
              mt-2
              "
          >
            {playlists.map((playlist, index) => (
              <ListItem
                key={index}
                image={playlist.image}
                name={playlist.name}
                href={playlist.href}
              />
            ))}
          </div>
        </div>
      </Header>

      {/* Your Curated Songs */}
      <div className="flex gap-10 flex-col mt-4">
        <div className="px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-3xl font-bold hover:underline transition cursor-pointer">
              Your Curated Songs
            </h1>
          </div>
          <PageContent songs={songs} />
        </div>

        {/* Features Charts */}
        <div className="px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-3xl font-bold hover:underline transition cursor-pointer">Features Charts</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
            {charts.map((chart, index) => (
              <ApiContent
                key={index}
                image={chart.image}
                name={chart.name}
                href={chart.href}
                artist={chart.artist}
              />
            ))}
          </div>
        </div>

        {/* Artists */}
        <div className="px-6 mb-5">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-3xl font-bold hover:underline transition cursor-pointer">Artists</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
            {artists.map((chart, index) => (
              <ApiContent
                key={index}
                image={chart.image}
                name={chart.name}
                href={chart.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
