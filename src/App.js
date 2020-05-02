import React from 'react';
import Particles from 'react-particles-js'; 
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js'; 
import './components/Logo/Logo.css'; 
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'; 
import Rank from './components/Rank/Rank.js'; 
import 'tachyons'; 

const particlesOptions = {
  particles: {

    number: {
       value:90,
    density: {
        enable: true,
        value_area: 800
      }
    },

    line_linked: {
      enable_auto : true
    }

  },

  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    }
  }
}  
function App() {
  return (
    <div className="App">
    <Particles className = 'particles' 
              params={particlesOptions}

      />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
    
    </div>
  );
}

export default App;
