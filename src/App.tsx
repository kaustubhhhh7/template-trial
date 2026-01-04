import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20"> {/* Offset for Fixed Navbar */}
        <Hero />
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
