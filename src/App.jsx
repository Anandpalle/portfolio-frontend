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
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return sessionStorage.getItem('portfolio_admin_auth') === 'true';
  });

  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    // Remove direct URL access: redirect directly to home if not authenticated via secret form trigger
    if ((window.location.pathname === '/admin' || window.location.pathname.startsWith('/admin/')) && !isAdminAuthenticated) {
      window.history.replaceState({}, '', '/');
      setCurrentPath('/');
    }

    const handlePopState = () => {
      if ((window.location.pathname === '/admin' || window.location.pathname.startsWith('/admin/')) && !isAdminAuthenticated) {
        window.history.replaceState({}, '', '/');
        setCurrentPath('/');
      } else {
        setCurrentPath(window.location.pathname);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isAdminAuthenticated]);

  const handleBackToPortfolio = () => {
    sessionStorage.removeItem('portfolio_admin_auth');
    setIsAdminAuthenticated(false);
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToAdmin = () => {
    sessionStorage.setItem('portfolio_admin_auth', 'true');
    setIsAdminAuthenticated(true);
    window.history.pushState({}, '', '/admin');
    setCurrentPath('/admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Only show Admin Dashboard if authenticated through secret form
  const showAdmin = isAdminAuthenticated && (currentPath === '/admin' || currentPath.startsWith('/admin/'));

  return (
    <ThemeProvider>
      {showAdmin ? (
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