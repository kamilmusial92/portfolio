import React, { useEffect } from 'react';

import Template from 'templates/Template';
import Home from 'sections/Home';
import About from 'sections/About';
import Projects from 'sections/Projects';
import Contact from 'sections/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Root = () => {
    
    useEffect(() => {
        AOS.init({ duration: 400 })
      }, [])

    return (
        <Template>
            <Home />
            <About />
            <Projects/>
            <Contact/>
        </Template>
    )
}

export default Root;