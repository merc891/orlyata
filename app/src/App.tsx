import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

export default function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}
