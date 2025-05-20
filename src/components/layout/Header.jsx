import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Search, Bell, User } from 'lucide-react'
import Navigation from './Navigation'
import SearchBar from '../common/SearchBar'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-black shadow-md' : 'bg-black'
}`}
    >
        <Navigation />
      {/* Mobile Header */}
      {/* <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="mr-3 text-gray-300 hover:text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Link to="/" className="text-white font-bold text-2xl">plex</Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-gray-300 hover:text-white">
              <SearchBar />
            </div>
            <button className="text-gray-300 hover:text-white">
              <Bell size={20} />
            </button>
            <button className="bg-gray-700/50 p-1 rounded-full hover:bg-gray-700">
              <User size={20} />
            </button>
          </div>

        </div>

        {mobileMenuOpen && (
          <div className="bg-black/95 animate-fade-in px-4 py-3 space-y-4">
            <SearchBar />

            <div className="space-y-3">
              <MobileNavItem to="/" label="Home" onClick={toggleMobileMenu} />
              <MobileNavItem to="/live-tv" label="Live TV" onClick={toggleMobileMenu} />
              <MobileNavItem to="/on-demand" label="On Demand" onClick={toggleMobileMenu} />
              <MobileNavItem to="/discover" label="Discover" onClick={toggleMobileMenu} />
            </div>

            <div className="pt-4 mt-4 border-t border-gray-700">
              <button className="w-full bg-gray-700/50 text-center py-2 rounded-lg hover:bg-gray-700 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div> */}

      {/* Mobile Search Overlay (could be implemented in the future) */}
    </header>
  )
}

// Helper component for mobile navigation items
function MobileNavItem({ to, label, onClick }) {
  return (
    <Link
      to={to}
      className="block py-2 text-lg font-medium hover:text-gray-300 transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  )
}

export default Header