import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Dashboard from './pages/Dashboard';
import Dashboard2 from './pages/Dashboard2';
import About from './pages/About';

export default function App() {
  return (
    <ReactLenis root>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/index2" element={<Dashboard2 />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}
