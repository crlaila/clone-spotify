import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export function Playlist() {
  return (
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
  );
}
