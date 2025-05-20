import HeroSection from '../components/sections/HeroSection';
import FeaturedContent from '../components/sections/FeaturedContent';
import { HERO_CONTENT } from '../utils/constants';

function HomePage() {
  return (
    <div className="flex flex-col min-h-full">
      <HeroSection 
        title={HERO_CONTENT.title}
        description={HERO_CONTENT.description}
        backgroundImage="/assets/images/generic-hero-background.avif"
        contentTitle={HERO_CONTENT.contentTitle}
      />
      <FeaturedContent />
    </div>
  );
}

export default HomePage;