import LandingPage from "./pages/LandingPage"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
);


export default App