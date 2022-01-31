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
import Maps from './pages/Maps';
import NotFound from './pages/NotFound';

function App() {
  const Test = () => {
    return <div>test</div>
  }

  return (
    <ValoProvider>
      <ChakraProvider>
        <Router>

          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="agents" element={<Agents />} />
            <Route path="/agent/:title" element={<AgentDetail />} />
            <Route path="maps" element={<Maps />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />

        </Router>
      </ChakraProvider>

    </ValoProvider>

  );
}

export default App;
