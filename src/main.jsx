// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Upload from './upload.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Upload />
//   </StrictMode>,
// )


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import RouteArea from './routing.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouteArea />
//   </StrictMode>,
// )



import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Splash from "./splash"; // ✅ start with splash wrapper

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Splash />
  </StrictMode>
);
