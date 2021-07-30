import React from 'react';
import SignIn from '../../Components/FillForm/Sign-in/Sign-in';
import SignUp from '../../Components/FillForm/SignUp/SignUp';
import './Sign-in-out.scss'

const SignInOut = () => {
    return ( 
        <div className="sign-in-out">
            <SignIn/>
            <SignUp/>
        </div>
     );
}
 
export default SignInOut;