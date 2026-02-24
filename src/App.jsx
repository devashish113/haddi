import FloatingElements from './components/FloatingElements';
import HeroSection from './components/HeroSection';
import PhotoGallery from './components/PhotoGallery';
import SpecialMessage from './components/SpecialMessage';
import SurpriseButton from './components/SurpriseButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <FloatingElements />
      <HeroSection />
      <SpecialMessage />
      <SurpriseButton />
      <PhotoGallery />
      <Footer />
    </div>
  );
}

export default App;
