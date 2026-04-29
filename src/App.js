import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/Global.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Physics from './pages/Physics';
import Chemistry from './pages/Chemistry';
import Medicine from './pages/Medicine';
import Literature from './pages/Literature';
import Peace from './pages/Peace';
import EconomicSciences from './pages/EconomicSciences';
import Workshops from './pages/Workshops';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/physics" element={<Physics />} />
              <Route path="/chemistry" element={<Chemistry />} />
              <Route path="/medicine" element={<Medicine />} />
              <Route path="/literature" element={<Literature />} />
              <Route path="/peace" element={<Peace />} />
              <Route path="/economic-sciences" element={<EconomicSciences />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
