// // // import { useState } from 'react'
// // // import reactLogo from './assets/react.svg'
// // // import viteLogo from '/vite.svg'
// // // import './App.css'

// // // function App() {
// // //   const [count, setCount] = useState(0)

// // //   return (
// // //     <>
// // //       <div>
// // //         <a href="https://vite.dev" target="_blank">
// // //           <img src={viteLogo} className="logo" alt="Vite logo" />
// // //         </a>
// // //         <a href="https://react.dev" target="_blank">
// // //           <img src={reactLogo} className="logo react" alt="React logo" />
// // //         </a>
// // //       </div>
// // //       <h1>Vite + React</h1>
// // //       <div className="card">
// // //         <button onClick={() => setCount((count) => count + 1)}>
// // //           count is {count}
// // //         </button>
// // //         <p>
// // //           Edit <code>src/App.jsx</code> and save to test HMR
// // //         </p>
// // //       </div>
// // //       <p className="read-the-docs">
// // //         Click on the Vite and React logos to learn more
// // //       </p>
// // //     </>
// // //   )
// // // }

// // // export default App

// // import "./app.css";
// // import YoutubeLogo from "./assets/youtube.png"
// // import microPhone from "./assets/circle-microphone.png"
// // import plusIcon from "./assets/plus.png"
// // import bellIcon from "./assets/bell.png"
// // import circleIcon from "./assets/checked.png"
// // import searchIcon from "./assets/search.png"

// // import homeIcon from "./assets/home.png"
// // import shortsIcon from "./assets/shorts.png"
// // import SubscriptionIcon from "./assets/Subscribe.png"
// // import downloadIcon from "./assets/download.png"

// // import youtubevideo from "./assets/video1.mp4"
// // import mernstackThumb from "./assets/mern.png"
// // import pythonThumb from "./assets/python.png"
// // import javascriptThumb from "./assets/javascript.png"
// // import hindiSongThumb from "./assets/video1Img.png"
// // import anirudhThumb from "./assets/anirudh.jpg"

// // import Dots from "./assets/dots.png"
// // import HoverVideoPlayer from 'react-hover-video-player';

// // import { useNavigate } from "react-router-dom";
// // import { useLocation } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // export default function Youtube() {
// //   const navigate = useNavigate()
// //   const location = useLocation()

// //   const message = location.state?.message;
// //   console.log("datas", message);

// //   const [categories, setCategories] = useState([])
// //   const [data, setData] = useState([])

// //   useEffect(() => {

// //     setCategories([
// //       {
// //         id: 1,
// //         name: "All",
// //       }, {
// //         id: 2,
// //         name: "Javacript",
// //       }, {
// //         id: 3,
// //         name: "Movies",
// //       }, {
// //         id: 4,
// //         name: "mithoon",
// //       }, {
// //         id: 5,
// //         name: "Thriller",
// //       }, {
// //         id: 6,
// //         name: "Mollywood",
// //       }, {
// //         id: 7,
// //         name: "Politics",
// //       }, {
// //         id: 8,
// //         name: "Anirudh",
// //       }, {
// //         id: 9,
// //         name: "Horror",
// //       },
// //       {
// //         id: 10,
// //         name: "Divine",
// //       }, {
// //         id: 11,
// //         name: "Books",
// //       }, {
// //         id: 12,
// //         name: "C++",
// //       }, {
// //         id: 13,
// //         name: "Django",
// //       }, {
// //         id: 14,
// //         name: "Hit Songs",
// //       }, {
// //         id: 15,
// //         name: "Excel",
// //       }, {
// //         id: 16,
// //         name: "Figma Design",
// //       },
// //       {
// //         id: 17,
// //         name: "kids",
// //       },
// //       {
// //         id: 18,
// //         name: "Action",
// //       },
// //       {
// //         id: 19,
// //         name: "Alan Walker",
// //       },
// //     ])
// //     setData([
// //       {
// //         id: 1,
// //         title: "MERN Stack Development",
// //         description: "Ek Deewane Ki Deewaniyat is a new song of Bollywood starring Harshavrdhan| Sung by Vushak Mishra| Director Milap Zaveri",
// //         author: "T-Series",
// //         time: "10 days ago",
// //         videoURL: youtubevideo,
// //         poster: mernstackThumb,
// //         profileImage: circleIcon,
// //         image: Dots

// //       },
// //       {
// //         id: 2,
// //         title: "Learning Python",
// //         description: "Ek Deewane Ki Deewaniyat is a new song of Bollywood starring Harshavrdhan| Sung by Vushak Mishra| Director Milap Zaveri",
// //         author: "T-Series 2",
// //         time: "9 days ago",
// //         videoURL: youtubevideo,
// //         poster: pythonThumb,
// //         profileImage: circleIcon,
// //         image: Dots


// //       },
// //       {
// //         id: 3,
// //         title: "Master Javascript",
// //         description: "Ek Deewane Ki Deewaniyat is a new song of Bollywood starring Harshavrdhan| Sung by Vushak Mishra| Director Milap Zaveri",
// //         author: "T-Series 2",
// //         time: "9 days ago",
// //         videoURL: youtubevideo,
// //         poster: javascriptThumb,
// //         profileImage: circleIcon,
// //         image: Dots


// //       },
// //       {
// //         id: 4,
// //         title: "Anirudh Hukum Tour",
// //         description: "Ek Deewane Ki Deewaniyat is a new song of Bollywood starring Harshavrdhan| Sung by Vushak Mishra| Director Milap Zaveri",
// //         author: "T-Series 2",
// //         time: "9 days ago",
// //         videoURL: youtubevideo,
// //         poster: anirudhThumb,
// //         profileImage: circleIcon,
// //         image: Dots


// //       },
// //       {
// //         id: 5,
// //         title: "Ek Deewane ki Deewaniyat",
// //         description: "Ek Deewane Ki Deewaniyat is a new song of Bollywood starring Harshavrdhan| Sung by Vushak Mishra| Director Milap Zaveri",
// //         author: "T-Series 2",
// //         time: "9 days ago",
// //         videoURL: youtubevideo,
// //         poster: hindiSongThumb,
// //         profileImage: circleIcon,
// //         image: Dots


// //       },
// //     ])
// //   }, []);

// //   return (
// //     <div>
// //       <div className="header">
// //         <div className="headerP">
// //           <p> ☰ </p>
// //         </div>
// //         <div className="menu">
// //           <img src={YoutubeLogo} />
// //           <h1>YouTube</h1>
// //         </div>

// //         <div className="searching">
// //           <input type="search"></input>
// //           <img src={searchIcon} />
// //         </div>
// //         <div className="micro">
// //           <img src={microPhone} />
// //         </div>

// //         <div onClick={() => navigate("/upload")} className="plus">
// //           <img src={plusIcon} />
// //           <p>Create</p>
// //         </div>

// //         <div className="bell">
// //           <img src={bellIcon} />
// //           <img onClick={() => { navigate("/sign_up") }} src={circleIcon} />
// //         </div>

// //       </div>
// //       <div className="headerCategories">
// //         {/* <button>All</button>
// //         <button>Music</button>
// //         <button>Javacript</button>
// //         <button>Tamil Cinema</button>
// //         <button>News</button>
// //         <button>T-series</button>
// //         <button>mithoon</button>
// //         <button>A.R.Rahman</button>
// //         <button>Live</button>
// //         <button>Soul Music</button>
// //         <button>Thriller</button>
// //         <button>Horror</button>
// //         <button>Movies</button>
// //         <button>Mollywood</button>
// //         <button>Anirudh</button>
// //         <button>Politics</button> */}
// //         {/* <button>tourist</button>
// //         <button>fun</button>
// //         <button>new movie song</button>
// //         <button>content</button>
// //         <button>cinema</button>
// //         <button>rap songs</button> */}
// //         {
// //           categories.map((item) => {
// //             return <button>{item.name}</button>
// //           })
// //         }

// //       </div>
// //       <div className="homeShorts">

// //         <div className="home" title="Home">
// //           <img onClick={() => {
// //             navigate("/")
// //           }} src={homeIcon} />
// //           <p>Home</p>
// //         </div>

// //         <div className="shorts" title="Shorts">
// //           <img onClick={() => {
// //             navigate("/")
// //           }} src={shortsIcon} />
// //           <p>Shorts</p>
// //         </div>

// //         <div className="subscription" title="subscription">
// //           <img onClick={() => {
// //             navigate("/")
// //           }} src={SubscriptionIcon} />
// //           <p>Subscription</p>
// //         </div>

// //         <div className="download" title="Download">
// //           <img onClick={() => {
// //             navigate("/")
// //           }} src={downloadIcon} />
// //           <p>Downloded</p>
// //         </div>

// //       </div>
// //       <div className="vidoesCards">

// //         {data.map((item) => {
// //           return (
// //             <div className="card" key={item.id}>
// //               <HoverVideoPlayer
// //                 controls
// //                 videoSrc={item.videoURL}
// //                 pausedOverlay={
// //                   <img
// //                     src={item.poster}
// //                     // alt={item.title}
// //                     style={{
// //                       width: "100%",
// //                       height: "100%",
// //                       objectFit: "cover",
// //                     }}
// //                   />
// //                 }

// //               />

// //               <div className="imgAndDescription">

// //                 <img src={item.profileImage} />

// //                 <div className="PtagInCard">
// //                   <p className="title">{item.title}</p>
// //                   <p>{item.description}
// //                   </p>

// //                   <div className="shortP">
// //                     <p>{item.author}</p>
// //                     <p>{item.time}</p>
// //                   </div>
// //                 </div>

// //                 <img className="dots" src={item.image} />

// //               </div>


// //             </div>

// //           )

// //         })}

// //         {/* <div className="card">

// //           <video controls poster={pythonThumb}>
// //             <source src={youtubevideo} type="video/mp4" />
// //           </video>

// //           <div className="imgAndDescription">

// //             <img src={circleIcon} />

// //             <div className="PtagInCard">
// //               <p className="title">MERN Stack Development</p>
// //               <p>Ek Deewane Ki Deewaniyat is a new song of Bollywood
// //                 "starring Harshavrdhan| Sung by Vushak Mishra| Director
// //                 Milap Zaveri"
// //               </p>

// //               <div className="shortP">
// //                 <p>T-Series</p>
// //                 <p>10 dyas ago</p>
// //               </div>
// //             </div>

// //             <img className="dots" src={Dots} />

// //           </div>


// //         </div><div className="card">

// //           <video controls poster={javascriptThumb}>
// //             <source src={youtubevideo} type="video/mp4" />
// //           </video>

// //           <div className="imgAndDescription">

// //             <img src={circleIcon} />

// //             <div className="PtagInCard">
// //               <p className="title">MERN Stack Development</p>
// //               <p>Ek Deewane Ki Deewaniyat is a new song of Bollywood
// //                 "starring Harshavrdhan| Sung by Vushak Mishra| Director
// //                 Milap Zaveri"
// //               </p>

// //               <div className="shortP">
// //                 <p>T-Series</p>
// //                 <p>10 dyas ago</p>
// //               </div>
// //             </div>

// //             <img className="dots" src={Dots} />

// //           </div>


// //         </div><div className="card">

// //           <video controls poster={anirudhThumb}>
// //             <source src={youtubevideo} type="video/mp4" />
// //           </video>

// //           <div className="imgAndDescription">

// //             <img src={circleIcon} />

// //             <div className="PtagInCard">
// //               <p className="title">MERN Stack Development</p>
// //               <p>Ek Deewane Ki Deewaniyat is a new song of Bollywood
// //                 "starring Harshavrdhan| Sung by Vushak Mishra| Director
// //                 Milap Zaveri"
// //               </p>

// //               <div className="shortP">
// //                 <p>T-Series</p>
// //                 <p>10 dyas ago</p>
// //               </div>
// //             </div>

// //             <img className="dots" src={Dots} />

// //           </div>

// //         </div><div className="card">

// //           <video controls poster={hindiSongThumb}>
// //             <source src={youtubevideo} type="video/mp4" />
// //           </video>

// //           <div className="imgAndDescription">

// //             <img src={circleIcon} />

// //             <div className="PtagInCard">
// //               <p className="title">MERN Stack Development</p>
// //               <p>Ek Deewane Ki Deewaniyat is a new song of Bollywood
// //                 "starring Harshavrdhan| Sung by Vushak Mishra| Director
// //                 Milap Zaveri"
// //               </p>

// //               <div className="shortP">
// //                 <p>T-Series</p>
// //                 <p>10 dyas ago</p>
// //               </div>
// //             </div>

// //             <img className="dots" src={Dots} />

// //           </div>
// //         </div> */}

// //       </div>

// //     </div>

// //   )
// // }



// import "./app.css";
// import YoutubeLogo from "./assets/youtube.png";
// import microPhone from "./assets/circle-microphone.png";
// import plusIcon from "./assets/plus.png";
// // import bellIcon from "./assets/bell.png";
// import notifyBell from "./assets/notification-bell.png"
// // import circleIcon from "./assets/checked.png";
// import searchIcon from "./assets/search.png";
// import userprofile from "./assets/user_profile.png"

// import homeIcon from "./assets/home.png";
// import shortsIcon from "./assets/shorts.png";
// import SubscriptionIcon from "./assets/Subscribe.png";
// import downloadIcon from "./assets/download.png";

// import youtubevideo from "./assets/video1.mp4";


// import mernstackThumb from "./assets/mern.png";
// import pythonThumb from "./assets/python.png";
// import javascriptThumb from "./assets/javascript.png";
// import hindiSongThumb from "./assets/video1Img.png";
// import anirudhThumb from "./assets/anirudh.jpg";

// import Dots from "./assets/dots.png";
// import HoverVideoPlayer from "react-hover-video-player";

// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function Youtube() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [categories, setCategories] = useState([]);
//   const [data, setData] = useState([]);


//   // Static categories + initial videos
//   useEffect(() => {
//     setCategories([
//       { id: 1, name: "All" },
//       { id: 2, name: "Javascript" },
//       { id: 3, name: "Movies" },
//       { id: 4, name: "Mithoon" },
//       { id: 5, name: "Thriller" },
//       { id: 6, name: "Mollywood" },
//       { id: 7, name: "Politics" },
//       { id: 8, name: "Anirudh" },
//       { id: 9, name: "Horror" },
//       { id: 10, name: "Divine" },
//       { id: 11, name: "Books" },
//       { id: 12, name: "C++" },
//       { id: 13, name: "Django" },
//       { id: 14, name: "Hit Songs" },
//       { id: 15, name: "Excel" },
//       { id: 16, name: "Figma Design" },
//       { id: 17, name: "Kids" },
//       { id: 18, name: "Action" },
//       { id: 19, name: "Alan Walker" },
//     ]);

//     setData([

//       {
//         id: 1,
//         title: "MERN Stack Development",
//         description:
//           "Learn MERN Stack from scratch with practical projects.",
//         author: "T-Series",
//         time: "10 days ago",
//         videoURL: youtubevideo,
//         poster: mernstackThumb,
//         profileImage: userprofile,
//         image: Dots,
//       },
//       {
//         id: 2,
//         title: "Learning Python",
//         description: "Python basics explained for beginners.Python is a versatile programming language used for web development, data analysis, AI, automation, and more-easy to learn and beginner-friendly.",
//         author: "T-Series 2",
//         time: "9 days ago",
//         videoURL: youtubevideo,
//         poster: pythonThumb,
//         profileImage: userprofile,
//         image: Dots,
//       },
//       {
//         id: 3,
//         title: "Master Javascript",
//         description: "Deep dive into JS concepts and tricks.JavaScript is a popular programming language used to make websites interactive, build web apps, and create dynamic user experiences.",
//         author: "T-Series 3",
//         time: "8 days ago",
//         videoURL: youtubevideo,
//         poster: javascriptThumb,
//         profileImage: userprofile,
//         image: Dots,
//       },
//       {
//         id: 4,
//         title: "Anirudh Hukum Tour",
//         description: "Live concert experience with Anirudh.",
//         author: "Sun Music",
//         time: "7 days ago",
//         videoURL: youtubevideo,
//         poster: anirudhThumb,
//         profileImage: userprofile,
//         image: Dots,
//       },
//       {
//         id: 5,
//         title: "Ek Deewane ki Deewaniyat",
//         description: "Bollywood romantic track by Harshavrdhan.",
//         author: "Sony Music",
//         time: "6 days ago",
//         videoURL: youtubevideo,
//         poster: hindiSongThumb,
//         profileImage: userprofile,
//         image: Dots,
//       },
//       {
//         id: 6,
//         title: "Anirudh Hukum Tour",
//         description: "Live concert experience with Anirudh.",
//         author: "Sun Music",
//         time: "7 days ago",
//         videoURL: youtubevideo,
//         poster: javascriptThumb,
//         profileImage: userprofile,
//         image: Dots,
//       },
//       {
//         id: 7,
//         title: "Anirudh Hukum Tour",
//         description: "Live concert experience with Anirudh.",
//         author: "Sun Music",
//         time: "7 days ago",
//         videoURL: youtubevideo,
//         poster: anirudhThumb,
//         profileImage: userprofile,
//         image: Dots,
//       },
//       {
//         id: 8,
//         title: "Anirudh Hukum Tour",
//         description: "Live concert experience with Anirudh.",
//         author: "Sun Music",
//         time: "7 days ago",
//         videoURL: youtubevideo,
//         poster: mernstackThumb,
//         profileImage: userprofile,
//         image: Dots,
//       },
//       {
//         id: 9,
//         title: "Anirudh Hukum Tour",
//         description: "Live concert experience with Anirudh.",
//         author: "Sun Music",
//         time: "7 days ago",
//         videoURL: youtubevideo,
//         poster: anirudhThumb,
//         profileImage: userprofile,
//         image: Dots,
//       },
//     ]);
//   }, []);

//   // Add new uploaded video
//   useEffect(() => {
//     if (location.state?.newVideo) {
//       setData((prev) => [
//         ...prev,
//         {
//           ...location.state.newVideo,
//           id: prev.length + 1,
//           image: Dots,
//         },
//       ]);
//     }
//   }, [location.state]);




//   return (
//     <div>
//       {/* Header */}
//       <div className="header">
//         <div className="headerP">
//           <p> ☰ </p>
//         </div>
//         <div className="menu">
//           <img src={YoutubeLogo} alt="YouTube" />
//           {/* <h1>YouTube <br />{JSON.parse(localStorage.getItem("userData")).username} </h1> */}

//           <h1>
//             YouTube <br />
//             {localStorage.getItem("userData")
//               ? JSON.parse(localStorage.getItem("userData")).username   //here user (like user: userEmailPassword.email) is the login status field
//               : ""}
//           </h1>

//           {/* <h1>YouTube</h1> */}
//         </div>
//         <div className="searching">
//           <input type="search" placeholder="Search" />
//           <img src={searchIcon} alt="Search" />
//         </div>
//         <div className="micro">
//           <img src={microPhone} alt="Mic" />
//         </div>
// <div onClick={() => navigate("/upload")} className="plus">
//   <img src={plusIcon} alt="Upload" />
//   <p>Create</p>
// </div>

//         <div className="bell">
//           <img src={notifyBell} alt="Bell" />

//             {(!localStorage.getItem("isLoggedIn") || localStorage.getItem("isLoggedIn") === "false") && <img
//              className="userProfileForButton" onClick={() => {
//                 navigate("/sign_up");
//               }}
//               // src={circleIcon}
//               src={userprofile}
//               alt="Profile"
//             />}


//             {localStorage.getItem("isLoggedIn") === "true" &&
//               <div className="log_out">
//                 <button onClick={() => {
//                   localStorage.clear()
//                   // localStorage.removeItem("isLoggedIn")
//                 }}>
//                   LOGOUT
//                 </button>
//             </div>



//           }
//         </div>
//       </div>

//       {/* Categories */}
//       <div className="headerCategories">
//         {categories.map((item) => (
//           <button key={item.id}>{item.name}</button>
//         ))}
//       </div>

//       {/* Sidebar */}
//       <div className="homeShorts">
//         <div className="home" title="Home">
//           <img onClick={() => navigate("/")} src={homeIcon} alt="Home" />
//           <p>Home</p>
//         </div>
//         <div className="shorts" title="Shorts">
//           <img onClick={() => navigate("/")} src={shortsIcon} alt="Shorts" />
//           <p>Shorts</p>
//         </div>
//         <div className="subscription" title="Subscription">
//           <img
//             onClick={() => navigate("/")}
//             src={SubscriptionIcon}
//             alt="Subscription"
//           />
//           <p>Subscription</p>
//         </div>
//         <div className="download" title="Download">
//           <img
//             onClick={() => navigate("/")}
//             src={downloadIcon}
//             alt="Download"
//           />
//           <p>Downloaded</p>
//         </div>
//       </div>

//       {/* Video Cards */}
//       <div className="vidoesCards">
//         {data.map((item) => (
//           <div className="card" key={item.id}>
//             <HoverVideoPlayer
//               controls
//               videoSrc={item.videoURL}
//               pausedOverlay={
//                 <img
//                   src={item.poster}
//                   alt={item.title}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                 />
//               }
//             />
//             <div className="imgAndDescription">
//               <img src={item.profileImage} alt="Profile" />
//               <div className="PtagInCard">
//                 <p className="title">{item.title}</p>
//                 <p>{item.description}</p>
//                 <div className="shortP">
//                   <p>{item.author}</p>
//                   <p>{item.time}</p>
//                 </div>
//               </div>
//               <img className="dots" src={item.image} alt="Options" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import "./app.css";
import VideoCard from './videoCard';
import YoutubeLogo from "./assets/youtube.png";
import microPhone from "./assets/circle-microphone.png";
import plusIcon from "./assets/plus.png";
// import bellIcon from "./assets/bell.png";
import notifyBell from "./assets/notification-bell.png"
// import circleIcon from "./assets/checked.png";
import searchIcon from "./assets/search.png";
import userprofile from "./assets/user_profile.png"

import homeIcon from "./assets/home.png";
import shortsIcon from "./assets/shorts.png";
import SubscriptionIcon from "./assets/Subscribe.png";
import downloadIcon from "./assets/download.png";
import switchIcon from "./assets/switch.png";


import youtubevideo from "./assets/videos/video1.mp4";
import fullStackVideo from "./assets/videos/full_stack.mp4";
import fiveStarVideo from "./assets/videos/5_star.mp4";
import aliceVideo from "./assets/videos/alicevideo.mp4";
import djangoVideo from "./assets/videos/djangovideo.mp4";

import sahibaVideo from "./assets/videos/SahibaVideo.mp4";
import paybackVideo from "./assets/videos/paybackVideo.mp4";
import kingkohliVideo from "./assets/videos/kingkohliVideo.mp4";
import rishtaVideo from "./assets/videos/rishtaVideo.mp4";



import netflixProfile from "./assets/netflixImg.png";
import bussinessProfile from "./assets/bussinessImg.png";
import codeProfile from "./assets/codingImg.png";
import pythonProfile from "./assets/pythonImg.png";
import musicProfile from "./assets/musicImg.png";
import tseriesProfile from "./assets/tseriesImg.png";
import chocolateProfile from "./assets/chocolateImg.png";
import paybackProfile from "./assets/paybackIcon.png";
import sportProfile from "./assets/cricketIcon.png";
import songProfile from "./assets/musicIcon.png";



import mernstackThumb from "./assets/mern.png";
import pythonThumb from "./assets/python.png";
import javascriptThumb from "./assets/javascript.jpg";
import hindiSongThumb from "./assets/video1Img.png";
import anirudhThumb from "./assets/anirudh.jpg";
import fiveStarThumb from "./assets/five_star.jpg";
import fullStackThumb from "./assets/Full_stack_image.jpg"
import djangoThumb from "./assets/djangoImg.webp"
import aliceThumb from "./assets/aliceImg.jpg"
import fiveStar2Thumb from "./assets/fivestarImg2.webp"
import paybackThumb from "./assets/paybackImg.jpg"
import ristaThumb from "./assets/ristaImg.jpg"
import sahibaThumb from "./assets/sahibaImg.jpg"
import kingkohliThumb from "./assets/kingkohliImg.webp"




import Dots from "./assets/dots.png";

import HoverVideoPlayer from "react-hover-video-player";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


// Import icons (using placeholder URLs since we can't access your assets)
// const YoutubeLogo = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg";
// const microPhone = "https://cdn-icons-png.flaticon.com/512/1082/1082810.png";
// const plusIcon = "https://cdn-icons-png.flaticon.com/512/1665/1665680.png";
// const notifyBell = "https://cdn-icons-png.flaticon.com/512/3239/3239952.png";
// const searchIcon = "https://cdn-icons-png.flaticon.com/512/622/622669.png";
// const userprofile = "https://cdn-icons-png.flaticon.com/512/3177/3177440.png";
// const homeIcon = "https://cdn-icons-png.flaticon.com/512/1946/1946488.png";
// const shortsIcon = "https://cdn-icons-png.flaticon.com/512/3524/3524335.png";
// const SubscriptionIcon = "https://cdn-icons-png.flaticon.com/512/2111/2111463.png";
// const downloadIcon = "https://cdn-icons-png.flaticon.com/512/3524/3524388.png";
// const Dots = "https://cdn-icons-png.flaticon.com/512/512/512142.png";

// // Sample video thumbnails
// const mernstackThumb = "https://i.ytimg.com/vi/fnpmR6Q5lEc/maxresdefault.jpg";
// const pythonThumb = "https://i.ytimg.com/vi/kqtD5dpn9C8/maxresdefault.jpg";
// const javascriptThumb = "https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg";
// const hindiSongThumb = "https://i.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg";
// const anirudhThumb = "https://i.ytimg.com/vi/LgmxMuW6Fsc/maxresdefault.jpg";

export default function Youtube() {
  const navigate = useNavigate();
  const location = useLocation();

  const [categories, setCategories] = useState([]);


  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");


  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);


  const [searchTerm, setSearchTerm] = useState("");

  const openLogoutModal = () => {
    setShowLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    setShowLogoutModal(false);
    // You can also add navigation here if needed
    // navigate('/login');
  };



  useEffect(() => {
    setCategories([
      { id: 1, name: "All" },
      { id: 2, name: "Education" },
      { id: 3, name: "Entertainment" },
      { id: 4, name: "Gaming" },
      { id: 5, name: "Music" },
      { id: 6, name: "Indian Music" },
      { id: 7, name: "Tamil Music" },
      { id: 8, name: "Bollywood" },
      { id: 9, name: "Hollywood" },
      { id: 10, name: "Sports" },
      { id: 11, name: "Technology" },
      { id: 12, name: "Vlogs" },
      { id: 13, name: "Comedy" },
      { id: 14, name: "Action" },
      { id: 15, name: "Horror" },
      { id: 16, name: "Books" },
      { id: 17, name: "DIY / Tutorials" },
      { id: 18, name: "Travel" },
      { id: 19, name: "Lifestyle" },
      { id: 20, name: "Animation" },
      { id: 21, name: "Ad" },

    ]);

    //static video card data
    // setData([
    //   {
    //     id: 1,
    //     title: "MERN Stack Development",
    //     description: "Learn MERN Stack from scratch with practical projects.",
    //     author: "T-Series",
    //     time: "10 days ago",
    //     videoURL: youtubevideo,
    //     poster: mernstackThumb,
    //     profileImage: userprofile,
    //     image: Dots,
    //   },
    //   {
    //     id: 2,
    //     title: "Learning Python",
    //     description: "Python basics explained for beginners. Python is a versatile programming language used for web development, data analysis, AI, automation, and more-easy to learn and beginner-friendly.",
    //     author: "T-Series 2",
    //     time: "9 days ago",
    //     videoURL: youtubevideo,
    //     poster: pythonThumb,
    //     profileImage: userprofile,
    //     image: Dots,
    //   },
    //   {
    //     id: 3,
    //     title: "Master Javascript",
    //     description: "Deep dive into JS concepts and tricks. JavaScript is a popular programming language used to make websites interactive, build web apps, and create dynamic user experiences.",
    //     author: "T-Series 3",
    //     time: "8 days ago",
    //     videoURL: youtubevideo,
    //     poster: javascriptThumb,
    //     profileImage: userprofile,
    //     image: Dots,
    //   },
    //   {
    //     id: 4,
    //     title: "Anirudh Hukum Tour",
    //     description: "Live concert experience with Anirudh.",
    //     author: "Sun Music",
    //     time: "7 days ago",
    //     videoURL: youtubevideo,
    //     poster: anirudhThumb,
    //     profileImage: userprofile,
    //     image: Dots,
    //   },
    //   {
    //     id: 5,
    //     title: "Ek Deewane ki Deewaniyat",
    //     description: "Bollywood romantic track by Harshavrdhan.",
    //     author: "Sony Music",
    //     time: "6 days ago",
    //     videoURL: youtubevideo,
    //     poster: hindiSongThumb,
    //     profileImage: userprofile,
    //     image: Dots,
    //   },
    //   {
    //     id: 6,
    //     title: "Advanced React Concepts",
    //     description: "Deep dive into React hooks and patterns.",
    //     author: "Code Academy",
    //     time: "5 days ago",
    //     videoURL: youtubevideo,
    //     poster: javascriptThumb,
    //     profileImage: userprofile,
    //     image: Dots,
    //   },
    //   {
    //     id: 7,
    //     title: "Music Production Tutorial",
    //     description: "Learn music production with Anirudh's techniques.",
    //     author: "Music Pro",
    //     time: "4 days ago",
    //     videoURL: youtubevideo,
    //     poster: anirudhThumb,
    //     profileImage: userprofile,
    //     image: Dots,
    //   },
    //   {
    //     id: 8,
    //     title: "Full Stack Web Development",
    //     description: "Complete guide to becoming a full stack developer.",
    //     author: "Dev Mentor",
    //     time: "3 days ago",
    //     videoURL: youtubevideo,
    //     poster: mernstackThumb,
    //     profileImage: userprofile,
    //     image: Dots,
    //   },
    // ]);





    // const fetchVideos = async () => {    //fetchVideos is to fetch video fields data from backend
    //   try {
    //     const response = await axios.get("http://10.128.6.132:7000/user/get_videos");
    //     const videos = response.data.map(video => ({
    //       id: video._id,
    //       title: video.Title,
    //       description: video.Description,
    //       author: video.Updated_By,
    //       time: new Date(video.created_on).toLocaleDateString(),
    //       videoURL: `http://10.128.6.132:7000/${video.video_upload}`,
    //       poster: `http://10.128.6.132:7000/${video.Thumbnail}`,
    //       profileImage: `http://10.128.6.132:7000/${video.Icon}`,
    //       image: Dots,
    //     }));
    //     setData(videos);
    //   } catch (err) {
    //     console.error("Error fetching videos:", err);
    //   }
    // };
    // fetchVideos();

    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://10.128.6.132:7000/user/get_videos");
        const videos = response.data.map(video => ({
          id: video._id,
          title: video.Title,
          description: video.Description,
          author: video.Updated_By,
          time: new Date(video.created_on).toLocaleDateString(),
          videoURL: `http://10.128.6.132:7000/${video.video_upload}`,
          poster: `http://10.128.6.132:7000/${video.Thumbnail}`,
          profileImage: `http://10.128.6.132:7000/${video.Icon}`,
          category: video.Category, 
          image: Dots,
        }));

        setData(videos);
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    };
    fetchVideos();

  }, []);


  useEffect(() => {
    const userAgent = navigator.userAgent;
    const cards = document.querySelector(".vidoesCards");

    if (userAgent.includes("Edg")) {
      cards.classList.add("edge");
    } else if (userAgent.includes("Chrome")) {
      cards.classList.add("chrome");
    }
  }, []);


  useEffect(() => {
    let filtered = data;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (video) => video.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (video) =>
          video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          video.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [selectedCategory, searchTerm, data]);




  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (video) => video.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredData(filtered);
    }
  }, [selectedCategory, data]);



  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };



  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <div className="headerP" onClick={toggleSidebar}>
            <span className="hamburger">☰</span>
          </div>


          {/* static name but with button*/}
          <div className="menu">
            <img src={YoutubeLogo} alt="YouTube" />
            <h1 className="youtube-title">
              YouTube
              <br />
              {localStorage.getItem("userData")
                ? JSON.parse(localStorage.getItem("userData")).username
                : ""}
            </h1>
          </div>


          {/* name changes but only when the component renders */}
          {/* <div className="menu">
            <img src={YoutubeLogo} alt="YouTube" />
            <h1 className="youtube-title">
              YouTube
              <br />
              {(() => {
                const user = localStorage.getItem("userData")
                  ? JSON.parse(localStorage.getItem("userData")).username
                  : "";
                // check window width for mobile
                return window.innerWidth <= 768 ? user.split(" ")[0] : user;
              })()}
            </h1>
          </div> */}


          {/* mobile split view */}
          {/* <div className="menu">
            <img src={YoutubeLogo} alt="YouTube" />
            <h1 className="youtube-title">
              YouTube
              <br />
              {isMobile ? user.split(" ")[0] : user}
            </h1>
          </div> */}

        </div>

        {/* <div className={`searching ${searchVisible ? 'mobile-search-visible' : ''}`}>
          <input type="search" placeholder="Search" />
          <img src={searchIcon} alt="Search" />
        </div> */}
        <div className={`searching ${searchVisible ? 'mobile-search-visible' : ''}`}>
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <img src={searchIcon} alt="Search" />
        </div>


        <div className="header-right">
          <div className="search-icon-mobile" onClick={toggleSearch}>
            <img src={searchIcon} alt="Search" />
          </div>
          <div className="micro">
            <img src={microPhone} alt="Mic" />
          </div>
          <div onClick={() => navigate("/upload")} className="plus">
            <img src={plusIcon} alt="Upload" />
            <p>Upload</p>
          </div>
          <div className="bell">
            <img src={notifyBell} alt="Bell" />

            {(!localStorage.getItem("isLoggedIn") || localStorage.getItem("isLoggedIn") === "false") &&
              (!localStorage.getItem("isSignIn") || localStorage.getItem("isSignIn") === "false") && < img
                className="userProfileForButton" onClick={() => {
                  navigate("/sign_up");
                }}
                // src={circleIcon}
                src={userprofile}
                alt="Profile"
              />}


            <div>
              {/* Logout Button - Only shows when user is logged in */}
              {(localStorage.getItem("isLoggedIn") === "true" ||
                localStorage.getItem("isSignIn") === "true") && (
                  <div className="log_out">
                    <button onClick={openLogoutModal}>
                      LOGOUT
                    </button>

                    <img
                      onClick={openLogoutModal}
                      src={switchIcon}
                      alt="Switch"
                      className="switchIcon"
                    />
                  </div>
                )}

              {/* Logout Confirmation Modal */}
              {showLogoutModal && (
                <div className="logout-modal-overlay" onClick={closeLogoutModal}>
                  <div className="logout-modal-content" onClick={(e) => e.stopPropagation()}>
                    <h2 className="logout-modal-title">Confirm Logout</h2>

                    <p className="logout-modal-text">
                      Do you want to log out?
                    </p>

                    <div className="logout-modal-buttons">
                      <button className="logout-confirm-btn" onClick={handleLogout}>
                        Log Out
                      </button>

                      <button className="logout-cancel-btn" onClick={closeLogoutModal}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>



      {/* Categories */}
      {/* <div className="headerCategories">
        {categories.map((item) => (
          <button key={item.id}>{item.name}</button>
        ))}
      </div> */}
      <div className="headerCategories">
        {categories.map((item) => (
          <button key={item.id} onClick={() => handleCategoryClick(item.name)}>
            {item.name}
          </button>
        ))}
      </div>




      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="homeShorts">
          <div className="home" title="Home">
            <img src={homeIcon} alt="Home" />
            <p>Home</p>
          </div>
          <div className="shorts" title="Shorts">
            <img src={shortsIcon} alt="Shorts" />
            <p>Shorts</p>
          </div>
          <div className="subscription" title="Subscription">
            <img src={SubscriptionIcon} alt="Subscription" />
            <p>Subscription</p>
          </div>
          <div className="download" title="Download">
            <img src={downloadIcon} alt="Download" />
            <p>Downloaded</p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Video Cards */}
      {/* <div className="vidoesCards">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="video-container">
              <HoverVideoPlayer
                controls
                videoSrc={item.videoURL}
                pausedOverlay={
                  <img loading="lazy"
                    src={item.poster}
                    alt={item.title}
                    // alt= "thumbnail is not there"
                    // className="video-thumbnail"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
              />
            </div>
            <div className="imgAndDescription">
              <img src={item.profileImage} alt="Profile" className="profile-img" />
              <div className="PtagInCard">
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
                <div className="shortP">
                  <p>{item.author}</p>
                  <p>{item.time}</p>
                </div>
              </div>
              <img className="dots" src={item.image} alt="Options" />
            </div>
          </div>
        ))}
      </div> */}

      {/* <div className="vidoesCards">
        {data.map((item) => (
          <VideoCard key={item.id} item={item}
            onDelete={(videoId) => {
              setData(prevData => prevData.filter(item => item.id !== videoId));
            }} />
        ))}
      </div> */}


      {/* <div className="vidoesCards">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              onDelete={(videoId) => {
                setData(prevData => prevData.filter(item => item.id !== videoId));
              }}
            />
          ))
        ) : (
          <p className="no-videos-message">No videos with this category "{selectedCategory}"😔....</p>
        )}
      </div> */}

      <div className="vidoesCards">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              onDelete={(videoId) => {
                setData(prevData => prevData.filter(item => item.id !== videoId));
              }}
            />
          ))
        ) : (
          <p style={{ textAlign: "left", fontSize: "25px" }}>
            {searchTerm
              ? `No videos found for "${searchTerm}" 😟`
              : `No videos found in "${selectedCategory}" 😔`}
          </p>
        )}
      </div>



    </div>
  );
}