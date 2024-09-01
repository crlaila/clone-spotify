import { Footer } from '@/components/Footer';
import { Playlist } from '@/components/Playlist';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <Playlist />
      </div>

      <Footer />
    </div>
  );
}
