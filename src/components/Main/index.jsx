import React from 'react'
import Header from '../Header/Header';
import Header2 from "../Header/Header2"
import Header3 from "../Header/Header3"
import SectionTwo from './SectionTwo';
import Section from './Section';
import Footer from '../Products/Footer';

function MainPage() {
  return (
    <div>
          <Header/>
    <Header2/>
    <Header3/>
    <Section/>
    <SectionTwo/>
    <Footer/>
    </div>
  )
}

export default MainPage