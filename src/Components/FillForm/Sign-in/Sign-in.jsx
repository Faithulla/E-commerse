import React from 'react';
import FormInput from '../Form-Fill/FormInput';
import './SignIn.scss'
import CustomBtm from '../../Custom/CustomBtn/CustomBtn';

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

                    <CustomBtm type="Submit">Sign In</CustomBtm>
                </form>
            </div>
         );
    }
}
 
export default SignIn;
