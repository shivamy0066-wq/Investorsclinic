import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import { ProjectsListing } from './pages/ProjectsListing.tsx';
import { AboutUs } from './pages/AboutUs.tsx';
import { ProjectDetail } from './pages/ProjectDetail.tsx';
import { CityDetail } from './pages/CityDetail.tsx';
import { BlogListing } from './pages/BlogListing.tsx';
import { BlogPostDetail } from './pages/BlogPostDetail.tsx';
import { ContactUs } from './pages/ContactUs.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </StrictMode>,
);
