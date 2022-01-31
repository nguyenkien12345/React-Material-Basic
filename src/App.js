import React, {Fragment} from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Banner from './components/Banner';
import Search from './components/Search';
import Explore from './components/Explore';
import Adventures from './components/Adventures';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
        <Fragment>
            <Navbar/>
            <Banner/>
            <Search/>
            <Explore/>
            <Adventures/>
            <Booking/>
            <Gallery/>
            <Contact/>
            <Footer/>
        </Fragment>
    </Router>
  )
}
