import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import { ProjectsListing } from './pages/ProjectsListing.tsx';
import { AboutUs } from './pages/AboutUs.tsx';
import { ProjectDetail } from './pages/ProjectDetail.tsx';
import { BlogListing } from './pages/BlogListing.tsx';
import { BlogPostDetail } from './pages/BlogPostDetail.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsListing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/blog" element={<BlogListing />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
