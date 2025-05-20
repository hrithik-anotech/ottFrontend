import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function FeaturedContent() {
  // Create refs for each category's scroll container
  const scrollContainerRefs = useRef({});
  
  // Sample movie data - in a real app, this would come from an API
  const movieCategories = [
    {
      id: 1,
      title: 'Trending Movies',
      subtitle: 'Most watched films this week',
      items: [
        { id: 101, title: 'Inception', subtitle: 'Dream within a dream', image: '/api/placeholder/240/135' },
        { id: 102, title: 'The Matrix', subtitle: 'Welcome to the real world', image: '/api/placeholder/240/135' },
        { id: 103, title: 'Interstellar', subtitle: 'Journey beyond the stars', image: '/api/placeholder/240/135' },
        { id: 104, title: 'Dune', subtitle: 'Fear is the mind-killer', image: '/api/placeholder/240/135' },
        { id: 105, title: 'Blade Runner 2049', subtitle: 'The future is now', image: '/api/placeholder/240/135' },
        { id: 106, title: 'The Avengers', subtitle: 'Earth\'s mightiest heroes', image: '/api/placeholder/240/135' },
        { id: 106, title: 'The Avengers', subtitle: 'Earth\'s mightiest heroes', image: '/api/placeholder/240/135' },
        { id: 106, title: 'The Avengers', subtitle: 'Earth\'s mightiest heroes', image: '/api/placeholder/240/135' },
        { id: 106, title: 'The Avengers', subtitle: 'Earth\'s mightiest heroes', image: '/api/placeholder/240/135' }
      ]
    },
    {
      id: 2,
      title: 'Award Winners',
      subtitle: 'Critically acclaimed masterpieces',
      items: [
        { id: 201, title: 'Parasite', subtitle: 'Act like you own the place', image: '/assets/images/Bollywood Gems/BG1.avif' },
        { id: 202, title: 'Nomadland', subtitle: 'Find your way home', image: '/assets/images/Bollywood Gems/BG1.avif' },
        { id: 203, title: 'The Shape of Water', subtitle: 'A tale of love and monsters', image: '/assets/images/Bollywood Gems/BG1.avif' },
        { id: 204, title: 'Everything Everywhere All at Once', subtitle: 'The universe is in her hands', image: '/assets/images/Bollywood Gems/BG1.avif' },
        { id: 205, title: 'Moonlight', subtitle: 'A journey of self-discovery', image: '/assets/images/Bollywood Gems/BG1.avif' },
        { id: 206, title: 'The Hurt Locker', subtitle: 'War is a drug', image: '/assets/images/Bollywood Gems/BG1.avif' },
        { id: 206, title: 'The Hurt Locker', subtitle: 'War is a drug', image: '/assets/images/Bollywood Gems/BG1.avif' },
        { id: 206, title: 'The Hurt Locker', subtitle: 'War is a drug', image: '/assets/images/Bollywood Gems/BG1.avif' }
      ]
    }
  ];

  return (
    <div className="bg-black py-8">
      <div className="container mx-auto px-4">
        {movieCategories.map(category => (
          <div key={category.id} className="mb-12">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              <p className="text-sm text-gray-400">{category.subtitle}</p>
            </div>
            
            <div className="relative">
              {/* Left Navigation Arrow */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transform -translate-x-1/2 transition-all duration-200 focus:outline-none"
                onClick={() => {
                  const container = scrollContainerRefs.current[category.id];
                  container.scrollTo({
                    left: container.scrollLeft - 300,
                    behavior: 'smooth'
                  });
                }}
              >
                <ChevronLeft size={24} />
              </button>
              
              <div 
                ref={el => scrollContainerRefs.current[category.id] = el}
                className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {category.items.map(movie => (
                  <div 
                    key={movie.id} 
                    className="flex-none w-60 cursor-pointer"
                  >
                    <div className="overflow-hidden rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative">
                        <img 
                          src={movie.image} 
                          alt={movie.title} 
                          className="w-full h-36 object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm font-bold text-white truncate">{movie.title}</h3>
                        <p className="text-xs text-gray-400 truncate">{movie.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Right Navigation Arrow */}
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transform translate-x-1/2 transition-all duration-200 focus:outline-none"
                onClick={() => {
                  const container = scrollContainerRefs.current[category.id];
                  container.scrollTo({
                    left: container.scrollLeft + 300,
                    behavior: 'smooth'
                  });
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedContent;