import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import SocialProfiles from './components/SocialProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';

function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleBackToPortfolio = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToAdmin = () => {
    window.history.pushState({}, '', '/admin');
    setCurrentPath('/admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If user navigated directly to /admin, show Admin Dashboard
  const isAdminRoute = currentPath === '/admin' || currentPath.startsWith('/admin/');

  return (
    <ThemeProvider>
      {isAdminRoute ? (
        <Admin onBackToPortfolio={handleBackToPortfolio} />
      ) : (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <Resume />
            <SocialProfiles />
            <Contact onNavigateToAdmin={handleNavigateToAdmin} />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;