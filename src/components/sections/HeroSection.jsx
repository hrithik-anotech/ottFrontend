import Button from '../common/Button';

function HeroSection({ title, description, backgroundImage, contentTitle }) {
  return (
    <div className="relative flex-grow h-[80vh]">
      {/* Background Gradient - Enhanced fade effect on the left */}
      <div id='hero-background' className="absolute inset-0 z-10"
      style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
          maskImage: "/assets/images/background-hero-mask.svg",
          WebkitMaskImage: "/assets/images/background-hero-mask.svg",
          maskSize: 'cover',
          WebkitMaskSize: 'cover',
          maskPosition: 'center left',
          WebkitMaskPosition: 'center left',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat'
        }}
       />
      
      {/* Background Image - Right aligned on large screens, full on medium and below */}
      <div 
        className="absolute inset-0 lg:left-[20%] bg-cover bg-center lg:bg-right"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col h-full justify-center px-6 md:px-16 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-lg md:text-xl max-w-xl mb-8">
          {description}
        </p>
        <div>
          <Button variant="primary" className="px-10 py-3 rounded-full text-lg">Sign Up</Button>
        </div>

        {/* Content Title Overlay */}
        {contentTitle && (
          <div className="absolute bottom-8 right-12 text-3xl font-light opacity-70">
            {contentTitle}
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;