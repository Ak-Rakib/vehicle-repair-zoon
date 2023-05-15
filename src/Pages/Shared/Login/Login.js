import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../ContextProvider/AuthProvider';

const Login = () => {
    const {loginProvider} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const loginHandler = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginProvider(email, password)
        .then(result => {
            const user = result.user;

            // jwt POST operation
            const currentUser = {
                email: user.email
            }
            console.log(currentUser)
            fetch('http://localhost:5000/jwt', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // local storage is easiest but not the best way to do this!
                localStorage.setItem('motor-token', data.token);
                navigate(from,{replace:true});
            })
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
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={loginHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-outline" type="submit" value="Login" />
                        </div>
                        <div className='text-center'>
                            <p>New to this site? please <Link to='/register'>Register</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;