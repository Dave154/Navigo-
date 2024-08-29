import { useState } from 'react'
import './App.css'
import {AppProvider} from './components/context.jsx'
import {useGlobe} from './components/context.jsx'
import Header from './components/Header'
import Hero from './components/Hero'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Section5 from './components/section5'
import Section6 from './components/section6'
import Section7 from './components/section7'
import Section8 from './components/section8'
function App() {
  return (
    <AppProvider>
    <main>
      <Header/>
      <Hero/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
    </main>
    </AppProvider>
  )
}

export default App