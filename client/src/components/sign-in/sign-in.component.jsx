import React , {useState, useEffect} from 'react';


import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

/****FOR REDUX SEGA CODE *****/
import {googleSignInStart, emailSignInStart  } from "../../redux/user/user.actions";
import { connect } from 'react-redux';

/****FOR REDUX SEGA CODE *****/
import './sign-in.styles.scss';

const SignIn = ({emailSignInStart, googleSignInStart})=>{
  /*** HOOKS ** */

  const [userCredentials, setCredentials] = useState({email:'', password:''})


  /*** HOOKS ** */



/*
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
*/
  // handleSubmit = async event => {
    const { email, password } = userCredentials; // we will get { email, password } from userCredential
  const handleSubmit = async event => {
    event.preventDefault();
    // const {emailSignInStart} = this.props

    // const { email, password } = this.state;

    emailSignInStart(email, password)
/*
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
    */
  };
 const handleChange = event => {
  // handleChange = event => {
    
    const { value, name } = event.target;

    // this.setState({ [name]: value });

    setCredentials({...userCredentials, [name]: value })
    
  };

  // render() {
    /****FOR REDUX SEGA CODE *****/

    // const {googleSignInStart}= this.props


    /****FOR REDUX SEGA CODE *****/


    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        {/* <form onSubmit={this.handleSubmit}> */}
        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            /*
            handleChange={this.handleChange}
            value={this.state.email}
            */
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'

            /*
            value={this.state.password}
            handleChange={this.handleChange}
            */
            handleChange={handleChange}
            value={password}
            

            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton> */}

{/* /****FOR REDUX SEGA CODE *****/}
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>


 {/* /****FOR REDUX SEGA CODE *****/}




          </div>
        </form>
      </div>
    );
  }
// }
/****FOR REDUX SEGA CODE *****/
const mapDispatchToProps = dispatch =>({
  googleSignInStart: ()=>dispatch(googleSignInStart()),
  emailSignInStart: (email, password)=>dispatch(emailSignInStart({email, password}))
}) 
/****FOR REDUX SEGA CODE *****/

export default connect(null, mapDispatchToProps)(SignIn);
