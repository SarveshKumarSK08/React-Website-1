import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/about2.jpg";
import Common from './Common';
const About = () => {
    return (
        <>
        <Common name=" Welcome to About page " imgsrc ={web} visit = "/contact" btname="Contanct Us"/>
        </>
    );
};

export default About;