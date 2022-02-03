import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Footer from './components/Footer';
import Header from './components/Header';
import { ValoProvider } from './context/ValoContext';
import AgentDetail from './pages/AgentDetail';
import Agents from './pages/Agents';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Ranks from './pages/Ranks';

//css import

function App() {


  return (
    <ValoProvider>
      <ChakraProvider>
        <Router>

          <Header />

          <div className="main" style={{ minHeight: "calc(100vh - 80px - 100px)" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/agent/:title" element={<AgentDetail />} />
              <Route path="/ranks" element={<Ranks />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>


          <Footer />

        </Router>
      </ChakraProvider>

    </ValoProvider>

  );
}

export default App;
