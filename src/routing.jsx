// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Youtube from "./App";
import Upload from "./upload";
import Signup from "./signUp";
import Login from "./login";
import VideoUpdate from "./videoUpdate";
import VideoDetail from "./videoDetail";


export default function RouteArea() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Youtube />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/sign_up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          {/* <Route path="/videoupdate" element={<VideoUpdate />} /> */}
          <Route path="/videoupdate/:id" element={<VideoUpdate />} />

          {/* <Route path="/videodetail" element={<VideoDetail />} /> */}
          <Route path="/videodetail/:id" element={<VideoDetail />} />




        </Routes>
      </BrowserRouter>
    </>

  );
}











