import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

const App = lazy(() => import('./App.tsx'));
const ProjectsListing = lazy(() => import('./pages/ProjectsListing.tsx').then(m => ({ default: m.ProjectsListing })));
const AboutUs = lazy(() => import('./pages/AboutUs.tsx').then(m => ({ default: m.AboutUs })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.tsx').then(m => ({ default: m.ProjectDetail })));
const CityDetail = lazy(() => import('./pages/CityDetail.tsx').then(m => ({ default: m.CityDetail })));
const BlogListing = lazy(() => import('./pages/BlogListing.tsx').then(m => ({ default: m.BlogListing })));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail.tsx').then(m => ({ default: m.BlogPostDetail })));
const ContactUs = lazy(() => import('./pages/ContactUs.tsx').then(m => ({ default: m.ContactUs })));

const LoadingScreen = () => (
  <div className="h-screen w-screen flex items-center justify-center bg-zinc-950">
    <div className="w-8 h-8 border-2 border-zinc-800 border-t-white rounded-full animate-spin" />
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<ProjectsListing />} />
          <Route path="/city/:slug" element={<CityDetail />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
