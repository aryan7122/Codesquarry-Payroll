import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/icon/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { otherIcons } from '../components/Helper/icons';
import { login } from '../pages/Redux/Actions/loginThunk';

const Login = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginUser = useSelector((state) => state?.login);
    console.log("loginUser", loginUser);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const loginData = {
                email,
                password
            }
            const res = await dispatch(login(loginData)); // Wait for API response

            if (login.fulfilled.match(res) && res.payload?.access_token) {
                navigate('/'); // Redirect user
                setIsLoggedIn(true); // Update state
            } else {
                console.error("Login failed:", res.payload || res.error.message);
            }
        } catch (error) {
            console.error('Error during login', error);
        }
    };

    const validatePassword = (password) => {
        // const minLength = 8;
        // const hasNumber = /\d/;
        // const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
        // return password.length >= minLength && hasNumber.test(password) && hasSpecialChar.test(password);
        return password;
    };

    const navigateSignUP = () => {
        navigate('/sign-up');
    }

    const navigatePass = () => {
        navigate('/forgot-password');
    }


    return (
        <>
            <div className="login-container">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover
                    draggable
                    theme="error"
                />
                {/* {loginUser?.loading ? <Alert className='Alert' severity="success">{sms}</Alert> : ''} */}

                <div className="login-form">
                    <div>
                        <div className='logo-container'>
                            <div className="logo">
                                <img src={logo} alt="Logo" className="logo" />
                            </div>
                            <h2>Payroll</h2>
                        </div>

                        <h3 className='welcome'>Welcome Back!  <span className='wave'>👋</span></h3>
                        {/* <label className="name">Log In to Manage Your HR Task</label> */}
                        <br /> <br />
                        <form onSubmit={handleLogin} className='loginAlignmentform' id="Formmm">
                            <div id='emailform' className='input1'>
                                <label className="address labelL">Email*</label>
                                <input
                                    className='valueform'
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ color: '#b0acac' }}
                                    required
                                />
                            </div>
                            <div className='input1'>
                                <label className='passwordform labelL'>Password*</label>
                                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative" }}>
                                    <input
                                        className='valueform'
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <span className="eyeicon" onClick={togglePasswordVisibility}>
                                        {showPassword ?
                                            otherIcons.show_password_svg
                                            :
                                            otherIcons.hide_password_svg
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="remember-forgot-container">
                                {/* <div className="remember-me">
                                    <input type="checkbox" id="rememberMe" className='checkbox' />
                                    <label className="rememberMe1">Remember Me</label>
                                </div>
                                <div className="forgot-password">
                                    <a style={{ fontSize: '13px', cursor: 'pointer' }} onClick={navigatePass}>
                                        Forget Password?
                                    </a>
                                </div> */}
                            </div>
                            <div className="button-container">
                                {/* <button type="submit" className='btnnn' >
                                    Login
                                </button> */}
                                {!loginUser?.loading ? (
                                    <button type="submit" className="btnnn">
                                        Login
                                    </button>
                                ) : (
                                    <button type="submit" className="btnnn" disabled>
                                        <div id="svg_login_loading">
                                            <svg
                                                version="1.1"
                                                id="L5"
                                                viewBox="0 0 100 100"
                                                enableBackground="new 0 0 100 100"
                                            >
                                                <circle fill="#fff" stroke="none" cx="10" cy="50" r="7">
                                                    <animateTransform
                                                        attributeName="transform"
                                                        dur="1s"
                                                        type="translate"
                                                        values="0 15 ; 0 -15; 0 15"
                                                        repeatCount="indefinite"
                                                        begin="0.1s"
                                                    />
                                                    <animate
                                                        attributeName="opacity"
                                                        dur="1s"
                                                        values="0;1;0"
                                                        repeatCount="indefinite"
                                                        begin="0.2s"
                                                    />
                                                </circle>
                                                <circle fill="#fff" stroke="none" cx="35" cy="50" r="7">
                                                    <animateTransform
                                                        attributeName="transform"
                                                        dur="1s"
                                                        type="translate"
                                                        values="0 10 ; 0 -10; 0 10"
                                                        repeatCount="indefinite"
                                                        begin="0.2s"
                                                    />
                                                    <animate
                                                        attributeName="opacity"
                                                        dur="1s"
                                                        values="0;1;0"
                                                        repeatCount="indefinite"
                                                        begin="0.2s"
                                                    />
                                                </circle>
                                                <circle fill="#fff" stroke="none" cx="60" cy="50" r="7">
                                                    <animateTransform
                                                        attributeName="transform"
                                                        dur="1s"
                                                        type="translate"
                                                        values="0 5 ; 0 -5; 0 5"
                                                        repeatCount="indefinite"
                                                        begin="0.3s"
                                                    />
                                                    <animate
                                                        attributeName="opacity"
                                                        dur="1s"
                                                        values="0;1;0"
                                                        repeatCount="indefinite"
                                                        begin="0.2s"
                                                    />
                                                </circle>
                                                <circle fill="#fff" stroke="none" cx="85" cy="50" r="7">
                                                    <animateTransform
                                                        attributeName="transform"
                                                        dur="1s"
                                                        type="translate"
                                                        values="0 5 ; 0 -5; 0 5"
                                                        repeatCount="indefinite"
                                                        begin="0.4s"
                                                    />
                                                    <animate
                                                        attributeName="opacity"
                                                        dur="1s"
                                                        values="0;1;0"
                                                        repeatCount="indefinite"
                                                        begin="0.2s"
                                                    />
                                                </circle>
                                            </svg>
                                        </div>
                                    </button>
                                )}

                            </div>
                            <div className='distancelogin'>
                                {/* <h6 className="login1">Login With</h6> */}
                            </div>
                            {/* <div className="social-media-container">
                                <a href="/" className="social-icon">
                                    <img src={ImgG} alt="" />
                                </a>
                                <a href="/" className="social-icon">
                                    <img src="" alt="" />
                                </a>
                                <a href="/" className="social-icon">
                                    <img src={ImgF} alt="" />
                                </a>
                                <a href="/" className="social-icon">
                                    <img src={ImgT} alt="" />
                                </a>
                                <a href="/" className="social-icon">
                                    <img src={ImgM} alt="" />
                                </a>
                                <a href="/" className="social-icon">
                                    <img src={ImgL} alt="" />
                                </a>
                            </div> */}
                            <div className='wholeaccount'>
                                {/* <h6 className='accountant'>Do you have an account yet? <a style={{ cursor: 'pointer' }} onClick={navigateSignUP}>Sign Up</a></h6> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
