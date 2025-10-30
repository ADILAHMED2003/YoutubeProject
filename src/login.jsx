import "./login.css"
import YoutubeLogo from "./assets/youtube.png"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";


export default function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""

    })
    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });

    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginData;
        if (!email || !password) {
            alert("Please fill the fields")
            return
        }
        else {
            try {
                const response = await axios.post("http://10.128.6.132:7000/user/youtube_login", loginData)
                console.log("server response", response)
                alert(response.data.message)
                localStorage.setItem("isLoggedIn", true)
                localStorage.setItem("userData", JSON.stringify(response.data))
                console.log(`the users jwt token is ${response.data.token}`)
                navigate("/")

            }
            catch (error) {

                if (error.response && error.response.data.message) {
                    alert(error.response.data.message)

                    console.log("server error", error.response.data.message)
                }
                else {
                    alert("here something went wrong , please try after sometimes")
                }
            }
        }
    }

    return (
        <div>
            <div className="topParentLogin">
                <div className="loginParent">
                    <div className="loginYoutubeAndImg">
                        <img src={YoutubeLogo} />
                        <h1>YouTube</h1>
                    </div>
                    {/* <p>Email</p> */}
                    <input type="email" name="email" onChange={handleChange} placeholder="Email" />

                    {/* <p>Password</p> */}
                    <input type="password" name="password" onChange={handleChange} placeholder="password" />

                    <div className="notRegister">
                        <button onClick={handleLogin} >LOGIN</button>

                        <div className="registerTag">
                            <h3>Not Registered?</h3>
                            <p onClick={() => navigate("/sign_up")}>Create An Account</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}