import { useEffect, useState } from 'react';
import TechCanvas from './components/TechCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import Profile from './components/Profile.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [current, setCurrent] = useState('landing');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [current]);

  const props = (id) => ({ active: current === id, onNavigate: setCurrent });

  return (
    <>
      <TechCanvas />
      <Navbar current={current} onNavigate={setCurrent} />
      <Landing active={current === 'landing'} />
      <Profile {...props('home')} />
      <Skills {...props('skills')} />
      <Projects {...props('projects')} />
      <Contacts {...props('contacts')} />
      <Footer />
    </>
  );
}
