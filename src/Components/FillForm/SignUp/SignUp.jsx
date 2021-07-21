import React from 'react';
import FormInput from '../Form-Fill/FormInput';
import CustomBtm from '../../Custom/CustomBtn/CustomBtn';
import { auth, createUserProfileDocument } from '../../../FireBase-utils/fireBase';

import './SignUp.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
         }
    }
    handleSubmit = async event => {
        event.preventDefault()

        const { displayName, password, confirmPassword, email} = this.state;

        if(password !== confirmPassword ){
            alert(`Ooops Passwords Doesn't match`)
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)

            await createUserProfileDocument(user,{displayName});

            this.setState({ 
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                 });

        }catch(error){
            console.log(error);
        }
        
    }
    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value})

    }
    render() { 
        const { displayName, password, confirmPassword, email} = this.state;
        return ( <div className="sign-up">
            <h2 className="title">I do nat have an account</h2>
            <span>Create new account or Enter valid one</span>
            <form action="SignUp" onSubmit={this.handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} label='DisplayName' onChange={this.handleChange} required/>
                <FormInput type="email" name="email" value={email} label='Email' onChange={this.handleChange} required/>
                <FormInput type="text" name="password" value={password} label='Password' onChange={this.handleChange} required/>
                <FormInput type="text" name="ConfirmPassword" value={confirmPassword} label='Confirm Password' onChange={this.handleChange} required/>

                <CustomBtm type='submit'>Sign Up</CustomBtm>
            </form>
        </div> );
    }
}
 
export default SignUp;