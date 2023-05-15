import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../ContextProvider/AuthProvider';

const Register = () => {
    const {createSignUp, createGoogleProvider} = useContext(AuthContext)

    const signUpHandler = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        

        createSignUp(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
        })
        .catch(error => console.log(error))
    }


    const provider = new GoogleAuthProvider();

    const googleHandler = () => {
          createGoogleProvider(provider)
          .then(result => {
            const user = result.user;
            console.log(user)
          })
          .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left lg:w-1/2">
               <img src={image} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
                <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                <form onSubmit={signUpHandler} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline" type="submit" value="Sign Up" />
                    </div>
                    <div className="form-control mt-2">
                        <input onClick={googleHandler} className="btn btn-outline" type="button" value="Sign Up with Google" />
                    </div>
                    <div className='text-center'>
                        <p>Have an account? please <Link to='/login'>LogIn</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;