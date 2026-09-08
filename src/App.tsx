import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

import { ScrollProgress } from './components/common/ScrollProgress';
import { Navbar } from './components/common/Navbar';
import { BackToTop } from './components/common/BackToTop';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { ExitIntentModal } from './components/common/ExitIntentModal';

import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Testimonials } from './components/testimonials/Testimonials';
import { Blog } from './components/blog/Blog';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

import { Chatbot } from './components/chatbot/Chatbot';
import { useLanguage } from './context/LanguageContext';
import { useScrollReveal } from './hooks/useScrollReveal';

export function AppContent() {
  const { language } = useLanguage();
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-theme-main text-theme-primary transition-colors duration-300 relative">
      <ScrollProgress />

      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
      <WhatsAppButton />
      <Chatbot key={language} />
      <ExitIntentModal />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
