import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import Register from "./pages/Register"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);


export default App