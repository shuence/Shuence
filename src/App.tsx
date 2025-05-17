import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import HeadMetadata from '@/components/shuence/HeadMetadata';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import ShuenceIndex from './pages/ShuenceIndex';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFound from './pages/NotFound';
import './styles/shuence-theme.css';

const queryClient = new QueryClient();

// Use HashRouter for GitHub Pages and some other static hosts
// or if specified in the environment
const useHashRouter =
  window.location.hostname.includes('github.io') || import.meta.env.VITE_USE_HASH_ROUTER === 'true';

const Router = useHashRouter ? HashRouter : BrowserRouter;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <HeadMetadata />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Legacy route for the single-page version */}
          <Route path="/all" element={<ShuenceIndex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
