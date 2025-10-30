// import React, { useState, useRef, useEffect } from 'react';
// import HoverVideoPlayer from "react-hover-video-player";

// const VideoCard = ({ item }) => {
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const popupRef = useRef(null);

//     // used to Close popup when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (popupRef.current && !popupRef.current.contains(event.target)) {
//                 setIsPopupOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleOptionClick = (option) => {
//         console.log(`Selected: ${option}`);
//         setIsPopupOpen(false);
//     };

//     return (
//         <div className="card" key={item.id}>
//             <div className="video-container">
//                 <HoverVideoPlayer
//                     controls
//                     videoSrc={item.videoURL}
//                     pausedOverlay={
//                         <img
//                             loading="lazy"
//                             src={item.poster}
//                             alt={item.title}
//                             style={{
//                                 width: "100%",
//                                 height: "100%",
//                                 objectFit: "cover",
//                             }}
//                         />
//                     }
//                 />
//             </div>
//             <div className="imgAndDescription">
//                 <img src={item.profileImage} alt="Profile" className="profile-img" />
//                 <div className="PtagInCard">
//                     <p className="title">{item.title}</p>
//                     <p className="description">{item.description}</p>
//                     <div className="shortP">
//                         <p>{item.author}</p>
//                         <p>{item.time}</p>
//                     </div>
//                 </div>
//                 <div className="popup-wrapper" ref={popupRef}>
//                     <img
//                         className="dots"
//                         src={item.image}
//                         alt="Options"
//                         onClick={() => setIsPopupOpen(!isPopupOpen)}
//                     />
//                     {isPopupOpen && (
//                         <div className="popup-menu">
//                             <div className="popup-arrow"></div>
//                             <div className="popup-content">
//                                 <div
//                                     className="popup-item"
//                                     onClick={() => handleOptionClick('Edit Option')}
//                                 >
//                                     Edit Video
//                                 </div>
//                                 <div
//                                     className="popup-item"
//                                     onClick={() => handleOptionClick('Detail Option')}
//                                 >
//                                     Video Detail 
//                                 </div>
//                                 <div
//                                     className="popup-item"
//                                     onClick={() => handleOptionClick('Save to Watch Later')}
//                                 >
//                                     Save to Watch Later
//                                 </div>
//                                 <div
//                                     className="popup-item"
//                                     onClick={() => handleOptionClick('Share Option')}
//                                 >
//                                     Share 
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };



//pop up is under the screen

// import React, { useState, useEffect, useRef } from 'react';
// import HoverVideoPlayer from "react-hover-video-player";
// import { useNavigate } from 'react-router-dom';


// const VideoCard = ({ item }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupPosition, setPopupPosition] = useState('bottom');
//   const dotsRef = useRef(null);
//   const popupRef = useRef(null);
//   const navigate = useNavigate();


//   // Check popup position
//   const checkPopupPosition = () => {
//     if (dotsRef.current) {
//       const dotsRect = dotsRef.current.getBoundingClientRect();
//       const popupHeight = 180; // Approximate popup height
//       const spaceBelow = window.innerHeight - dotsRect.bottom;

//       // If not enough space below, show popup above
//       if (spaceBelow < popupHeight) {
//         setPopupPosition('top');
//       } else {
//         setPopupPosition('bottom');
//       }
//     }
//   };

//   // Click outside handler
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         setShowPopup(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Check position when popup opens
//   useEffect(() => {
//     if (showPopup) {
//       checkPopupPosition();
//     }
//   }, [showPopup]);

//   const handleMenuClick = (option) => {
//     console.log(`Clicked: ${option}`);
//     setShowPopup(false);
//   };

//   const handleDotsClick = (e) => {
//     e.stopPropagation();
//     setShowPopup(!showPopup);
//   };

//   return (
//     <div className="card">
//       <div className="video-container">
//         <HoverVideoPlayer
//           controls
//           videoSrc={item.videoURL}
//           pausedOverlay={
//             <img
//               loading="lazy"
//               src={item.poster}
//               alt={item.title}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//           }
//         />
//       </div>

//       <div className="imgAndDescription">
//         <img src={item.profileImage} alt="Profile" className="profile-img" />
//         <div className="PtagInCard">
//           <p className="title">{item.title}</p>
//           <p className="description">{item.description}</p>
//           <div className="shortP">
//             <p>{item.author}</p>
//             <p>{item.time}</p>
//           </div>
//         </div>

//         {/* Three Dots Button */}
//         <div className="popup-wrapper" ref={dotsRef}>
//           <img
//             className="dots"
//             src={item.image}
//             alt="Options"
//             onClick={handleDotsClick}
//           />

//           {/* Popup Menu with dynamic positioning */}
//           {showPopup && (
//             <div
//               ref={popupRef}
//               className={`popup-menu ${popupPosition}`}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="popup-content">
//                 <div
//                   className="popup-item"
//                   onClick={() => {
//                     handleMenuClick('Edit Option');
//                     navigate('/videoupdate');
//                   }}
//                 >
//                   Edit Video
//                 </div>

//                 <div className="popup-item" onClick={() => {
//                   navigate(`/videodetail/${item._id}`)
//                   handleMenuClick('Detail Option')
//                 }}>
//                   Video Detail
//                 </div>

//                 <div className="popup-item" onClick={() => handleMenuClick('Save to Watch Later')}>
//                   Save to Watch Later
//                 </div>
//                 <div className="popup-item" onClick={() => handleMenuClick('Share Option')}>
//                   Share Video
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div >
//   );
// };

// export default VideoCard;




//this is the correct code with backend Fetch

// import React, { useState, useEffect, useRef } from 'react';
// import HoverVideoPlayer from "react-hover-video-player";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";


// const VideoCard = ({ item }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupPosition, setPopupPosition] = useState('bottom');
//   const dotsRef = useRef(null);
//   const popupRef = useRef(null);
//   const navigate = useNavigate();

//   // Check popup position
//   const checkPopupPosition = () => {
//     if (dotsRef.current) {
//       const dotsRect = dotsRef.current.getBoundingClientRect();
//       const popupHeight = 180;
//       const spaceBelow = window.innerHeight - dotsRect.bottom;

//       if (spaceBelow < popupHeight) {
//         setPopupPosition('top');
//       } else {
//         setPopupPosition('bottom');
//       }
//     }
//   };

//   // Close popup on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         setShowPopup(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     if (showPopup) {
//       checkPopupPosition();
//     }
//   }, [showPopup]);



//   const handleMenuClick = async (option, videoId) => {
//     setShowPopup(false);

//     switch (option) {
//       case "Edit Option":
//         navigate(`/videoupdate/${videoId}`);
//         break;
//       case "Detail Option":
//         navigate(`/videodetail/${videoId}`);
//         break;
//       case "Share Option":
//         if (navigator.share) {
//           navigator.share({
//             title: item.title,
//             text: item.description,
//             url: window.location.href,
//           });
//         } else {
//           navigator.clipboard.writeText(window.location.href);
//           alert("Link copied to clipboard!");
//         }
//         break;
//       case "Video Deleted":
//         try {
//           const response = await axios.delete(
//             `http://192.168.1.40:7000/user/deleteOneVideos/${videoId}`
//           );
//           if (response.data.success) {
//             alert("Video deleted successfully ✅");
//             // Optional: remove from UI if you have videos state
//           } else {
//             alert("Failed to delete video: " + response.data.message);
//           }
//         } catch (err) {
//           console.error("Error deleting video:", err);
//           alert("Error deleting video: " + (err.response?.data?.message || err.message));
//         }
//         break;
//       default:
//         console.log("Unknown option clicked:", option);
//     }
//   };






//   const handleDotsClick = (e) => {
//     e.stopPropagation();
//     setShowPopup(!showPopup);
//   };


//   //  const formatDuration = (seconds) => {
//   //   if (!seconds) return "0:00";
//   //   const mins = Math.floor(seconds / 60);
//   //   const secs = Math.floor(seconds % 60);
//   //   return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//   // };



//   // const handleShare = () => {
//   //   if (navigator.share) {
//   //     navigator.share({
//   //       title: video.title,
//   //       text: video.description,
//   //       url: window.location.href,
//   //     });
//   //   } else {
//   //     navigator.clipboard.writeText(window.location.href);
//   //     alert("Link copied to clipboard!");
//   //   }
//   // };

//   return (
//     <div className="card">

//       <div
//         className="video-container"
//         onClick={() => navigate(`/videodetail/${item._id || item.id}`)}
//         style={{ cursor: "pointer" }}
//       >
//         <HoverVideoPlayer
//           controls
//           videoSrc={item.videoURL}
//           pausedOverlay={
//             <img
//               loading="lazy"
//               src={item.poster}
//               alt={item.title}
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           }
//         />
//         {/* <span className="video-duration">
//           {formatDuration(item.duration)}
//         </span> */}
//       </div>





//       <div className="imgAndDescription"
//         onClick={() => navigate(`/videodetail/${item._id || item.id}`)}>
//         <img src={item.profileImage} alt="Profile" className="profile-img" />
//         <div className="PtagInCard">
//           <p className="title">{item.title}</p>
//           <p className="description">{item.description}</p>
//           <div className="shortP">
//             <p>{item.author}</p>
//             <p>{item.time}</p>
//           </div>
//         </div>


//         {/* Dots button */}
//         <div className="popup-wrapper" ref={dotsRef}>
//           <img
//             className="dots"
//             src={item.image}
//             alt="Options"
//             onClick={handleDotsClick}
//           />

//           {/* Popup */}
//           {showPopup && (
//             <div
//               ref={popupRef}
//               className={`popup-menu ${popupPosition}`}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="popup-content">
//                 <div
//                   className="popup-item"
//                   onClick={() => {
//                     handleMenuClick('Edit Option');
//                     // navigate('/videoupdate');
//                     navigate(`/videoupdate/${item._id || item.id}`);
//                   }}
//                 >
//                   Edit Video
//                 </div>

//                 <div
//                   className="popup-item"
//                   onClick={() => {
//                     handleMenuClick('Detail Option');
//                     navigate(`/videodetail/${item._id || item.id}`);
//                   }}
//                 >
//                   Video Detail
//                 </div>

//                 <div
//                   className="popup-item"
//                   onClick={() => handleMenuClick('Share Option')}
//                 >
//                   Share
//                 </div>

//                 <div
//                   className="popup-item"
//                   onClick={() => handleMenuClick('Video Deleted', item._id || item.id)}
//                 >
//                   Delete Video
//                 </div>

//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCard;



import React, { useState, useEffect, useRef } from 'react';
import HoverVideoPlayer from "react-hover-video-player";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const VideoCard = ({ item, onDelete }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [popupPosition, setPopupPosition] = useState('bottom');
  const dotsRef = useRef(null);
  const popupRef = useRef(null);
  const deleteConfirmRef = useRef(null);
  const navigate = useNavigate();

  // Check popup position
  const checkPopupPosition = () => {
    if (dotsRef.current) {
      const dotsRect = dotsRef.current.getBoundingClientRect();
      const popupHeight = 180;
      const spaceBelow = window.innerHeight - dotsRect.bottom;

      if (spaceBelow < popupHeight) {
        setPopupPosition('top');
      } else {
        setPopupPosition('bottom');
      }
    }
  };

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
      if (deleteConfirmRef.current && !deleteConfirmRef.current.contains(event.target)) {
        setShowDeleteConfirm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showPopup) {
      checkPopupPosition();
    }
  }, [showPopup]);

  const handleMenuClick = async (option, videoId) => {
    setShowPopup(false);

    switch (option) {
      case "Edit Option":
        navigate(`/videoupdate/${videoId}`);
        break;
      case "Detail Option":
        navigate(`/videodetail/${videoId}`);
        break;
      case "Share Option":
        if (navigator.share) {
          navigator.share({
            title: item.title,
            text: item.description,
            url: window.location.href,
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert("Link copied to clipboard!");
        }
        break;
      case "Video Deleted":
        // Show delete confirmation popup instead of immediately deleting
        
        setShowDeleteConfirm(true);
        break;
      default:
        console.log("Unknown option clicked:", option);
    }
  };

  const handleDeleteConfirm = async (videoId) => {
    try {
      const response = await axios.delete(
        `http://10.128.6.132:7000/user/deleteOneVideos/${videoId}`
      );
      if (response.data.success) {
        alert("Video deleted successfully ✅");
        onDelete(videoId);
        setShowDeleteConfirm(false);
        // Optional: remove from UI if you have videos state
      } else {
        alert("Failed to delete video: " + response.data.message);
        setShowDeleteConfirm(false);
      }
    } catch (err) {
      console.error("Error deleting video:", err);
      alert("Error deleting video: " + (err.response?.data?.message || err.message));
      setShowDeleteConfirm(false);
    }
  };

  const handleDotsClick = (e) => {
    e.stopPropagation();
    setShowPopup(!showPopup);
  };

  return (
    <div className="card">
      <div
        className="video-container"
        onClick={() => navigate(`/videodetail/${item._id || item.id}`)}
        style={{ cursor: "pointer" }}
      >
        <HoverVideoPlayer
          controls
          videoSrc={item.videoURL}
          pausedOverlay={
            <img
              loading="lazy"
              src={item.poster}
              alt={item.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
        />
      </div>

      <div className="imgAndDescription"
        onClick={() => navigate(`/videodetail/${item._id || item.id}`)}>
        <img src={item.profileImage} alt="Profile" className="profile-img" />
        <div className="PtagInCard">
          <p className="title">{item.title}</p>
          <p className="description">{item.description}</p>
          <div className="shortP">
            <p>{item.author}</p>
            <p>{item.time}</p>
          </div>
        </div>

        {/* Dots button */}
        <div className="popup-wrapper" ref={dotsRef}>
          <img
            className="dots"
            src={item.image}
            alt="Options"
            onClick={handleDotsClick}
          />

          {/* Popup */}
          {showPopup && (
            <div
              ref={popupRef}
              className={`popup-menu ${popupPosition}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="popup-content">
                <div
                  className="popup-item"
                  onClick={() => {
                    handleMenuClick('Edit Option');
                    navigate(`/videoupdate/${item._id || item.id}`);
                  }}
                >
                  Edit Video
                </div>

                <div
                  className="popup-item"
                  onClick={() => {
                    handleMenuClick('Detail Option');
                    navigate(`/videodetail/${item._id || item.id}`);
                  }}
                >
                  Video Detail
                </div>

                <div
                  className="popup-item"
                  onClick={() => handleMenuClick('Share Option')}
                >
                  Share
                </div>

                <div
                  className="popup-item"
                  onClick={() => handleMenuClick('Video Deleted', item._id || item.id)}
                >
                  Delete Video
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Popup */}
      {showDeleteConfirm && (
        <div className="delete-confirm-overlay">
          <div className="delete-confirm-popup" ref={deleteConfirmRef}>
            <div className="delete-confirm-content">
              <h3>Delete Video</h3>
              <p>Do you want to delete video?</p>
              <div className="delete-confirm-buttons">
                <button 
                  className="delete-btn"
                  onClick={() => handleDeleteConfirm(item._id || item.id)}
                >
                  Delete
                </button>
                <button 
                  className="cancel-btn"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;