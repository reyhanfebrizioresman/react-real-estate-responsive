import React,{useState} from 'react';
import Navbar from '../src/components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import { menuData } from './data/MenuData';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';

function App() {

    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
    <Router>
      <GlobalStyle />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Hero slides={SliderData} />
        <InfoSection {...InfoData} />
    </Router>
    </>
  );
}

export default App;
