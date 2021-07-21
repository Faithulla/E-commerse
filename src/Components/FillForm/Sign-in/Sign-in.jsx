import React from 'react';
import FormInput from '../Form-Fill/FormInput';
import './SignIn.scss'
import CustomBtm from '../../Custom/CustomBtn/CustomBtn';
import { singInWithGoogle } from '../../../FireBase-utils/fireBase';

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
                {/* inputs */}
                    <FormInput 
                    label='Email'
                    type="email" 
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}/>
                    <FormInput 
                    label='Password'
                    type="password"
                    onChange={this.handleChange} 
                    name="password" 
                    value={this.state.password}/>
                    {/* buttons */}
                    <div className="buttons">
                    <CustomBtm type="Submit">Sign In</CustomBtm>                    
                    <CustomBtm onClick={singInWithGoogle} isGoogleSignIn>Sign in with Google</CustomBtm>                   
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SignIn;
