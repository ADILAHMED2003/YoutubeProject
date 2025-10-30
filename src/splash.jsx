import React from "react";
import { useEffect, useState } from "react";
import "./splash.css"
// import { default as Youtube } from "./App";
import RouteArea from "./routing.jsx";
import YoutubeLogo from "./assets/youtube.png";


export default function Splash() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <div className="splash-screen">
                    <img src={YoutubeLogo} alt="Logo" className="logo" />
                    <p className="welcome-text">Youtube An Video Platform</p>
                </div>
            ) : (
                <RouteArea />
            )}
        </div>
    );
}
