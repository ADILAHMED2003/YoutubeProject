// import "./signUp.css"
// import YoutubeLogo from "./assets/youtube.png"
// // import { Navigate } from "react-router-dom"
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";


// export default function Signup() {
//     const navigate = useNavigate()
//     const location = useLocation()
//     return (
//         <div>

//             <div className="signUpParent">

//                 <div className="menu">
//                     <img src={YoutubeLogo} />
//                     <h1>YouTube</h1>
//                 </div>
//                 <div className="name">
//                     <p>Name</p>
//                     <input type="text" />
//                 </div>

//                 <div className="email">
//                     <p>Email Address</p>
//                     <input type="email" />
//                 </div>

//                 <div className="password">
//                     <p>Password</p>
//                     <input type="password" />
//                 </div>

//                 <div className="age">
//                     <p>Age</p>
//                     <input type="text" />
//                 </div>

//                 <div className="cell">
//                     <p>Cell</p>
//                     <input type="text" />
//                 </div>

//                 <div className="gender">
//                     <p>Gender</p>
//                     <input type="radio" /> <p>Male</p>
//                     <input type="radio" /> <p>Female</p>
//                 </div>
//                 <button onClick={() => navigate("/")} className="sign">
//                     Sign Up
//                 </button>

//                 <div className="account">
//                     <h4>I have Account</h4>
//                     {/* <link to="/login">Login</link> */}
//                     <p onClick={() => navigate("/login")}>Login</p>
//                 </div>

//             </div>
//         </div>
//     )
// }




import "./signUp.css"
import YoutubeLogo from "./assets/youtube.png"
// import { Navigate } from "react-router-dom"
import { data, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";



export default function Signup() {
    const navigate = useNavigate()
    const location = useLocation()
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        age: "",
        cell: "",
        gender: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    console.log(formData)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password, age, cell, gender } = formData;

        if (!username || !email || !password || !age || !cell || !gender) {
            alert("Please fill all the fields");
            console.log("Form data missing:", formData);
            return;
        } else {
            try {
                console.log("Submitting form data:", formData);
                const response = await axios.post("http://10.128.6.132:7000/user/youtube_register", formData);

                console.log("Server response:", response);
                localStorage.setItem("isSignIn", true)
                localStorage.setItem("userData", JSON.stringify(response.data))
                alert(response.data.message);

                navigate("/", {
                    // state: [username]
                });
            } catch (error) {
                console.error("Error while sign up:", error);

                if (error.response && error.response.data.message) {
                    alert(error.response.data.message);
                    console.log("Server error message:", error.response.data.message);
                } else {
                    alert("Something went wrong. Please try again.");
                }
            }
        }
    };


    return (
        <div>
            <div className="topParentSignup">
                <div className="signUpParent">

                    <div className="signYoutubeandImg">
                        <img src={YoutubeLogo} />
                        <h1>YouTube</h1>
                    </div>
                    <div className="name">
                        <p>Username</p>
                        <input type="text" name="username" onChange={handleChange} />
                    </div>

                    <div className="email">
                        <p>Email</p>
                        <input type="email" name="email" onChange={handleChange} />
                    </div>

                    <div className="password">
                        <p>Password</p>
                        <input type="password" name="password" onChange={handleChange} />
                    </div>

                    <div className="age">
                        <p>Age</p>
                        <input type="text" name="age" onChange={handleChange} />
                    </div>

                    <div className="cell">
                        <p>Cell</p>
                        <input type="text" name="cell" onChange={handleChange} />
                    </div>

                    <div className="gender">
                        <p>Gender</p>
                        <input type="radio" name="gender" value="male" onChange={handleChange} /> <p>Male</p>
                        <input type="radio" name="gender" value="female" onChange={handleChange} /> <p>Female</p>
                    </div>
                    <button onClick={handleSubmit} className="sign">
                        Sign Up
                    </button>

                    <div className="account">
                        <h4>I have Account</h4>
                        {/* <link to="/login">Login</link> */}
                        <p onClick={() => navigate("/login")}>Login</p>
                    </div>

                </div>
            </div>
        </div>
    )
}