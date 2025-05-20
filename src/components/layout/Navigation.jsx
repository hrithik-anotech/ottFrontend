import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Home, Tv, Film, Compass } from 'lucide-react'
import NavButton from '../common/NavButton'

function Navigation() {
  const [searchActive, setSearchActive] = useState(false)
  const location = useLocation()

  return (
    <nav className="w-full flex flex-wrap items-center justify-between py-4 mx-3.5">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-white font-bold text-3xl mr-8">plex</Link>

        {/* Search Bar */}
        <div className="flex items-center w-full">
          <div className={`flex items-center bg-gray-800/80 rounded-full px-4 py-2 w-full ${searchActive ? 'ring-1 ring-gray-400' : ''}`}>
            <Search size={24} className="text-gray-400" />
            <input
              className="bg-transparent border-none outline-none ml-2 text-white w-full placeholder-gray-400"
              placeholder="Search..."
              onFocus={() => setSearchActive(true)}
              onBlur={() => setSearchActive(false)}
            />
          </div>
        </div>


      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-4">
        <NavButton to="/" icon={<Home size={18} />} label="Home" active={location.pathname === '/'} />
        <NavButton to="/live-tv" icon={<Tv size={18} />} label="Live TV" active={location.pathname === '/live-tv'} />
        <NavButton to="/on-demand" icon={<Film size={18} />} label="On Demand" active={location.pathname === '/on-demand'} />
        <NavButton to="/discover" icon={<Compass size={18} />} label="Discover" active={location.pathname === '/discover'} />
      </div>

      {/* Sign In Button */}
      <div className="flex items-center space-x-4">
        <button className="bg-[#303030] text-white px-6 py-2 rounded-4xl text-lg hover:bg-gray-700 transition-colors">
          Sign In
        </button>
      </div>
    </nav>
  )
}

export default Navigation
