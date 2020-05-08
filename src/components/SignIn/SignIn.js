import React from 'react';

 

class SignIn extends React.Component { 

	constructor(props){
	super(props);
	this.state = {

		signInEmail: '',
		signInPassword: ''
	}
}

onEmailChange = (event) => {

this.setState({signInEmail: event.target.value})

}

onPasswordChange = (event) => {

this.setState({signInPassword: event.target.value})

}

onSubmitSignIn = () => {

	fetch('http://localhost:3001/signin', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({

			email: this.state.signInEmail,
			password: this.state.signInPassword
		})
	})
		.then(response => response.json())
		.then (users => {
			if(users.id){
				this.props.loadUser(users);
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
				      <legend className="f1 fw6 ph1 mh1 grow">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6"  htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        onChange={this.onEmailChange}/>
				         
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password" 
				        id="password"
				        onChange={this.onPasswordChange} />

				      </div>
				    
				    </fieldset>
				    <div className="">
				      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      onClick = {this.onSubmitSignIn} 
				      type="submit" 
				      value="Sign in"/>
				    </div>
				    <div className="lh-copy mt3">
				      <p 
				      onClick= {() => this.props.onRouteChange('register')} 
				      className ="f5 link dim black grow db pointer">Register!</p>
				     

			    </div>
			  	</div>
			</main>
		</article>
	


		
	);
}

}

export default SignIn;