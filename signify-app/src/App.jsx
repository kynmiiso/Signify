import './App.css'
import Home from './Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LearnPage from './LearnPage.jsx'
import TranslatePage from './TranslatePage.jsx'
import Navbar from './Navbar.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/translate" element={<TranslatePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
