import './App.css';
import Home from './components/Home'
import Pricing from './components/Pricing';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './components/About';
import Work from './components/Work';

import Navbar from './components/Navbar';
import Layout from './Layout';
import AppServices from './AppServices';
import Project from './components/Project';
import Ethics from './components/Ethics';
import Venture from './components/Venture';
import Industries from './Industries';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <Header />
      <Navbar />
      <Routes>
        <Route path="/about"  element={<About />} />
        <Route path="/home"  element={ <Home />} />
        <Route path="/work"  element={<Work />} />
        <Route path="/pricing"  element={<Pricing />} />
      </Routes>
      <Layout name="Teckie App Development Company" details="Free website and mobile consulation for $1OO buget" />
      <AppServices />
      <Project />
      <Ethics />
      <Venture description="Working On Any New Project Or Looking To Start A New Venture?" details="Let's discuss it and find viable solutions for you!" />
      <Industries />
    </Router>
  );
}

export default App;
