import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShipperLogin from './pages/ShipperLogin';
import CarrierLogin from './pages/CarrierLogin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipper/login" element={<ShipperLogin />} />
        <Route path="/carrier/login" element={<CarrierLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
