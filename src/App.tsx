import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Plan from './pages/Plan';
import Navigate from './pages/Navigate';
import Community from './pages/Community';
import Money from './pages/Money';
import Guide from './pages/Guide';
import Guides from './pages/Guides';

export default function App() {
  return (
    <BrowserRouter basename="/Pod_Project">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/navigate" element={<Navigate />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/community" element={<Community />} />
          <Route path="/money" element={<Money />} />
          <Route path="/guide" element={<Guide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
