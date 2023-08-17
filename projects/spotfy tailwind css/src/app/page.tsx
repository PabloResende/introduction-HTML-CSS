import {Home as HomeIcon, Search, Library, ChevronRight, ChevronLeft} from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col" >
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className="h-3 w-3 bg-red-500 rounded-full" />
            <div className="h-3 w-3 bg-yellow-500 rounded-full"/>
            <div className="h-3 w-3 bg-green-500 rounded-full"/>
          </div> 
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-ms font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-ms font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-ms font-semibold text-zinc-200">
              <Library />
              Your library
            </a>
          </nav>
          <nav className="mt-6 pt-6 borer-t border-zinc-800 flex flex-col gap-3">
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock do Balacubaco</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Reggae 2002</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Periferia é nois</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Funk pesado doido</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Forró boys as melhores</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Callypso pra mãe</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock quebra tudo</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Djavú clássicos</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>chora boy</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Animê 2014</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Funk da rossinha</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>High com music</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/20 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/20 p-1'>
              <ChevronRight />
            </button>
          </div>
            <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
            <div className='grid grid-cols-3 gap-6'>
              <div className='bg-withe/10 rounded flex items-center gap-4 overflow-hidden hover:gb-white/20 transition-colors'>Rock do Balacubaco</div>
              <div className='bg-withe/10 rounded flex items-center gap-4 overflow-hidden hover:gb-white/20 transition-colors'>Reggae 2002</div>
              <div className='bg-withe/10 rounded flex items-center gap-4 overflow-hidden hover:gb-white/20 transition-colors'>Furacão 2000</div>
              <div className='bg-withe/10 rounded flex items-center gap-4 overflow-hidden hover:gb-white/20 transition-colors'>Periferia é nois</div>
              <div className='bg-withe/10 rounded flex items-center gap-4 overflow-hidden hover:gb-white/20 transition-colors'>Djavú clássicos</div>
              <div className='bg-withe/10 rounded flex items-center gap-4 overflow-hidden hover:gb-white/20 transition-colors'>Animê 2014</div>
            </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
