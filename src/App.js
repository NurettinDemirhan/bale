import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import InfoPage from "./pages/InfoPage"
function App() {
  return (
    <Router>
      <div>
        
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/InfoPage" element={<InfoPage />} />
              
            </Routes>
          
      </div>
    </Router>
  );
}

export default App;
