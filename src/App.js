import React from 'react';
import Particles from 'react-particles-js'; 
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js'; 
import './components/Logo/Logo.css'; 
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'; 
import Rank from './components/Rank/Rank.js';
import Facial from './components/Facial/Facial.js'; 
import SignIn from './components/SignIn/SignIn.js'; 
import Register from './components/Register/Register.js';
import 'tachyons'; 
import Clarifai from 'clarifai';

 

const app = new Clarifai.App({
 apiKey: 'eee83c2ef0e6438ca162bd26e0f98c5f'
});

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
class App extends React.Component {
  constructor () {

    super();
    this.state = {

      input: '',
      imageUrl: '',
      box: {},
      route:'signin',
      isSignedIn: false,
      user: {

        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: new Date() 
    }
  }
}

loadUser = (data) => {

  this.setState(

    {user: {

          id: data.id,
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined


  }})
}

   BoxLocation = (data) => {

    const APIFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('InputImage');
    const width = Number(image.width);
    const height = Number(image.height);
  
    return {

      leftCol: APIFace.left_col*width,
      topRow: APIFace.top_row*height,
      rightCol: width-(APIFace.right_col*width),
      bottomRow: height-(APIFace.bottom_row*height)
    }
}

  displayBox = (box) => {
    console.log(box);
    this.setState({box: box});
}


  onInputChange = (event) => {
    this.setState({input:event.target.value});
}

  onSubmit = () => {
    this.setState({imageUrl:this.state.input})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
     if(response){

    fetch('http://localhost:3001/image', {

      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({

        id: this.state.user.id
          
    })

   })

      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user, {entries:count}))
      })

     } 
    this.displayBox(this.BoxLocation(response));
     
    })
    .catch(err => console.log(err));
 }   
  onRouteChange = (route) => {
    if(route==='signout'){

    this.setState({isSignedIn:false})
  } else if (route==='home') {
    this.setState({isSignedIn:true})
  }

    this.setState({route:route});
}

  render () {

    return (
<div className="App">

    <Particles className = 'particles' 
      params={particlesOptions}

      />

      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange = {this.onRouteChange}/>
      { this.state.route ==='home' ?     
          <div>
              <Logo/>
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm onInputChange = {this.onInputChange} onSubmit = {this.onSubmit}  />
              <Facial box={this.state.box} imageUrl = {this.state.imageUrl}/>
          </div>
        : (
          this.state.route ==='signin' ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          : <Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
          )
      }
</div>
  )
}
}

export default App;
