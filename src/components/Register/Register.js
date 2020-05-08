import React from 'react';

 

class Register extends React.Component {

	constructor(props) {

		super(props);
		this.state = {

			name: '',
			registerEmail: '',
			registerPassword: ''
		}
	}

onNameChange = (event) => {

this.setState({name: event.target.value})

}

onRegisterEmail = (event) => {

this.setState({registerEmail: event.target.value})

}

onRegisterPassword = (event) => {

this.setState({registerPassword: event.target.value})

}

onSubmitRegister = () => {

	fetch('http://localhost:3001/register', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({

			name: this.state.name,
			email: this.state.registerEmail,
			password: this.state.registerPassword
		})
	})
		.then(response => response.json())
		.then (user => {
			if(user.id){
				this.props.loadUser(user)
				this.props.onRouteChange('home');
			}
		})
	
}

	render() {

		return (
<article className="mw6 center  br4 pa3  mv6 ba b--black-50 shadow-5">
	<main className="pa4 black-80">
	  	<div className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f1 fw6 ph1 mh1 grow">Register</legend>
		      <div className="mt3">
		       
		        <label className="db fw6 lh-copy f6" for="name">Name</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="name" 
		        name="name"  
		        id="name"
		        onChange = {this.onNameChange}/>
		      </div>

		      <div className="mt3">

		        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="email" 
		        name="email-address" 
		        id="email-address"
		        onChange={this.onRegisterEmail}/>
		      </div>

		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" for="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="password" 
		        name="password"  
		        id="password"
		        onChange= {this.onRegisterPassword}/>
		      </div>
		    
		    </fieldset>
		    <div className="">
		      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		      onClick = {() => this.onSubmitRegister('home')} 
		      type="submit" 
		      value="Register"/>
		    </div>
	  	</div>
	</main>
</article>


	

	
		
	);
}
}
export default Register;