import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'
function LoginPopup({ loginPopover, setLoginPopover }) {
    const [currentState, setCurrentState] = useState("Login")
    return (
        <div className="login-popup">
            <div className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setLoginPopover(!currentState)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Signup" && <input type="text" placeholder="your name" required />}
                    <input type="email" placeholder="your email" required />
                    <input type="password" placeholder="your password" required />
                </div>
                <button>{currentState}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the Terms of Service and Privacy Policy</p>
                </div>
                <p>
                    {currentState === "Login" ? (
                        <>
                            Don't have an account? <span onClick={() => setCurrentState("Signup")}>Signup</span>
                        </>
                    ) : (
                        <>
                            Already have an account? <span onClick={() => setCurrentState("Login")}>Login</span>
                        </>
                    )}
                </p>
            </div>
        </div>
    )
}

export default LoginPopup
