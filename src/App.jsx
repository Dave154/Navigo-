
import {AppProvider} from './components/context.jsx'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

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
import Section9 from './components/section9'
import Footer from './components/footer'
function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "",
        },
        links: {
          color: "#977C66",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  return (
    <AppProvider>
    <main>
      
      {init &&   <Particles
      className='particles'
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}/>
      }
  
      <Header/>
      <Hero/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Footer/>
    </main>
    </AppProvider>
  )
}

export default App