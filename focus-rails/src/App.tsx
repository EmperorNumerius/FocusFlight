import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FocusProvider } from './context/FocusContext';
import Home from './pages/Home';
import Journey from './pages/Journey';
import History from './pages/History';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <FocusProvider>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </FocusProvider>
  );
};

export default App;
