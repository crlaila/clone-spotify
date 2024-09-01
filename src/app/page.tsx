import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Volume2,
  Maximize2,
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon size={24} />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search size={24} />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library size={24} />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Pop Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Dail Mix 4
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rock Classics
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Blues Classics
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/20 p-1 ">
              <ChevronLeft size={24} />
            </button>
            <button className="rounded-full bg-black/20 p-1 ">
              <ChevronRight size={24} />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer">
              <Image
                src="/rock-classics.jpg"
                width={104}
                height={104}
                alt="Capa Rock Classics"
              />
              <strong>Rock Classics</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={24} />
              </button>
            </a>
            <a className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer">
              <Image
                src="/rock-classics.jpg"
                width={104}
                height={104}
                alt="Capa Rock Classics"
              />
              <strong>Rock Classics</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={24} />
              </button>
            </a>
            <a className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer">
              <Image
                src="/rock-classics.jpg"
                width={104}
                height={104}
                alt="Capa Rock Classics"
              />
              <strong>Rock Classics</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={24} />
              </button>
            </a>
            <a className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer">
              <Image
                src="/rock-classics.jpg"
                width={104}
                height={104}
                alt="Capa Rock Classics"
              />
              <strong>Rock Classics</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={24} />
              </button>
            </a>
            <a className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer">
              <Image
                src="/rock-classics.jpg"
                width={104}
                height={104}
                alt="Capa Rock Classics"
              />
              <strong>Rock Classics</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={24} />
              </button>
            </a>
            <a className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer">
              <Image
                src="/rock-classics.jpg"
                width={104}
                height={104}
                alt="Capa Rock Classics"
              />
              <strong>Rock Classics</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={24} />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Laila Silva</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/rock-classics.jpg"
                width={104}
                height={104}
                className="w-full"
                alt="Capa Rock Classics"
              />
              <strong className="font-semibold">Daily Mix - Rock</strong>
              <span className="text-sm text-zinc-400">
                Red Hot, AC/DC, Metalic, Red Hot, AC/DC, Metalic,
              </span>
            </a>
            <a className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/rock-classics.jpg"
                width={104}
                height={104}
                className="w-full"
                alt="Capa Rock Classics"
              />
              <strong className="font-semibold">Daily Mix - Rock</strong>
              <span className="text-sm text-zinc-400">
                Red Hot, AC/DC, Metalic, Red Hot, AC/DC, Metalic,
              </span>
            </a>
            <a className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/rock-classics.jpg"
                width={104}
                height={104}
                className="w-full"
                alt="Capa Rock Classics"
              />
              <strong className="font-semibold">Daily Mix - Rock</strong>
              <span className="text-sm text-zinc-400">
                Red Hot, AC/DC, Metalic, Red Hot, AC/DC, Metalic,
              </span>
            </a>
            <a className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/rock-classics.jpg"
                width={104}
                height={104}
                className="w-full"
                alt="Capa Rock Classics"
              />
              <strong className="font-semibold">Daily Mix - Rock</strong>
              <span className="text-sm text-zinc-400">
                Red Hot, AC/DC, Metalic, Red Hot, AC/DC, Metalic,
              </span>
            </a>
            <a className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/rock-classics.jpg"
                width={104}
                height={104}
                className="w-full"
                alt="Capa Rock Classics"
              />
              <strong className="font-semibold">Daily Mix - Rock</strong>
              <span className="text-sm text-zinc-400">
                Red Hot, AC/DC, Metalic, Red Hot, AC/DC, Metalic,
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/rock-classics.jpg"
            width={60}
            height={60}
            alt="Capa Rock Classics"
          />
          <div className="flex flex-col">
            <strong className="font-normal">Rope</strong>
            <span className="text-xs text-zinc-400">Foo Fighters</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="p-2 rounded-full bg-white text-black ml-auto mr-8">
              <Play size={20} />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs text-zinc-400">0:30</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-between">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume2 size={20} />
            <div className="h-1 rounded-full w-20 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
