import './App.css'
import LearnButton from './LearnButton.jsx'
import TranslateButton from './TranslateButton.jsx'
import Home from './Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LearnPage from './LearnPage.jsx'
import TranslatePage from './TranslatePage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/translate" element={<TranslatePage />} />
      </Routes>
    </Router>
  );
}

export default App
