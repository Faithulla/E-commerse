import React from 'react';
import FormInput from '../Form-Fill/FormInput';
import './SignIn.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:''
         }
    }
    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email:'', password:'' })
    }
    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value})

    }
    render() { 
        return ( 
            <div className="sign-in">
                <h2>I alredy have an acount</h2>
                <span>Sign in with your email & password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email"
                    label='Email'
                    onChange={this.handleChange}
                    value={this.state.email}/>
                    <FormInput 
                    type="password"
                    label='Password'
                    onChange={this.handleChange} 
                    name="password" 
                    value={this.state.password}/>

                    <input type="Submit" value="Submit" />
                </form>
            </div>
         );
    }
}
 
export default SignIn;
