import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <main>
      <ScrollToTop />
      <Navigation />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </main>

  );
}

export default App;
