// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./videoDetail.css";

// export default function VideoDetail() {
//   const { id } = useParams();
//   const [videoData, setVideoData] = useState(null);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/user/youtube_upload/${id}`);
//         const data = await res.json();
//         setVideoData(data);
//       } catch (error) {
//         console.error("Error fetching video details:", error);
//       }
//     };
//     fetchVideo();
//   }, [id]);

//   if (!videoData) {
//     return <div className="loading">Loading video...</div>;
//   }

//   return (
//     <div className="video-detail-container">
//       <div className="video-player-section">
//         <video
//           src={videoData.video_upload}
//           controls
//           autoPlay
//           className="video-player"
//         />
//         <h1 className="video-title">{videoData.Title}</h1>
//         <p className="video-description">{videoData.description}</p>

//         <div className="video-meta">
//           <div className="uploader-info">
//             <img
//               src={videoData.Icon}
//               alt="Uploader Icon"
//               className="uploader-icon"
//             />
//             <p className="uploader-name">{videoData.updated_by}</p>
//           </div>
//           <p className="upload-date">
//             Uploaded on:{" "}
//             {new Date(videoData.created_on).toLocaleDateString("en-IN")}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const VideoDetail = () => {
//   const { id } = useParams();
//   const [video, setVideo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/videos/${id}`);
//         setVideo(res.data);
//       } catch (err) {
//         console.error('Error fetching video details:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchVideo();
//   }, [id]);

//   if (loading) return <p>Loading video details...</p>;
//   if (!video) return <p>Video not found</p>;

//   return (
//     <div className="video-detail">
//       <video src={video.videoURL} controls style={{ width: '100%', borderRadius: '10px' }} />
//       <h2>{video.title}</h2>
//       <p>{video.description}</p>
//       <p><strong>Author:</strong> {video.author}</p>
//       <p><strong>Category:</strong> {video.category}</p>
//       <p><strong>Uploaded:</strong> {video.time}</p>
//     </div>
//   );
// };

// export default VideoDetail;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./videoDetail.css";

// const VideoDetail = () => {
//     const { id } = useParams();
//     const [video, setVideo] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchVideo = async () => {
//             try {
//                 const res = await axios.get("http://10.82.117.132:7000/user/get_videos");
//                 // Match id: use _id or id
//                 const foundVideo = res.data.find(v => (v._id || v.id).toString() === id);
//                 setVideo(foundVideo);
//             } catch (err) {
//                 console.error("Error fetching videos:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchVideo();
//     }, [id]);

//     if (loading) return <p className="loading">Loading video details...</p>;
//     if (!video) return <p className="not-found">Video not found 😕</p>;

//     return (
//         <div className="video-detail-container">
//             <div className="video-player-wrapper">
//                 <video
//                     src={video.videoURL}
//                     poster={video.poster}
//                     controls
//                     className="video-player"
//                 />
//             </div>

//             <div className="video-info">
//                 <h2 className="video-title">{video.title || "No title"}</h2>
//                 <p className="video-description">{video.description || "No description"}</p>

//                 <div className="video-meta">
//                     <p><strong>Author:</strong> {video.author || "Unknown"}</p>
//                     <p><strong>Category:</strong> {video.category || "None"}</p>
//                     <p><strong>Uploaded:</strong> {video.time || "Unknown"}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VideoDetail;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./videoDetail.css";

// const VideoDetail = () => {
//     const { id } = useParams();
//     const [video, setVideo] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchVideo = async () => {
//             try {
//                 const res = await axios.get("http://10.82.117.132:7000/user/get_videos");

//                 const mappedVideos = res.data.map((v) => ({
//                     id: v._id,
//                     title: v.Title,
//                     description: v.Description,
//                     author: v.Updated_By,
//                     category: v.Category || "None",
//                     time: new Date(v.created_on).toLocaleDateString(),
//                     videoURL: `http://10.82.117.132:7000/${v.video_upload}`,
//                     poster: `http://10.82.117.132:7000/${v.Thumbnail}`,
//                     profileImage: `http://10.82.117.132:7000/${v.Icon}`,
//                 }));

//                 const foundVideo = mappedVideos.find((v) => v.id === id);
//                 setVideo(foundVideo);

//             } catch (err) {
//                 console.error("Error fetching videos:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchVideo();
//     }, [id]);

//     if (loading) return <p className="loading">Loading video details...</p>;
//     if (!video) return <p className="not-found">Video not found 😕</p>;

//     return (
//         <div className="video-detail-container">
//             <div className="video-player-wrapper">
//                 <video
//                     src={video.videoURL}
//                     poster={video.poster}
//                     controls
//                     className="video-player"
//                 />
//             </div>

//             <div className="video-info">
//                 <h2 className="video-title">{video.title}</h2>
//                 <p className="video-description">{video.description}</p>

//                 <div className="video-meta">
//                     <p><strong>Author:</strong> {video.author}</p>
//                     <p><strong>Category:</strong> {video.category}</p>
//                     <p><strong>Uploaded:</strong> {video.time}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VideoDetail;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./videoDetail.css";

const VideoDetail = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const [saved, setsaved] = useState(false);

    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    const [subscribed, setSubscribed] = useState(false);

    const [showFullDescription, setShowFullDescription] = useState(false);

    const [subs] = useState(Math.floor(Math.random() * 50000));
    

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const res = await axios.get("http://10.128.6.132:7000/user/get_videos");
                const mappedVideos = res.data.map((clip) => ({
                    id: clip._id,
                    title: clip.Title,
                    description: clip.Description,
                    author: clip.Updated_By,
                    category: clip.Category || "None",
                    time: new Date(clip.created_on).toLocaleDateString(),
                    videoURL: `http://10.128.6.132:7000/${clip.video_upload}`,
                    poster: `http://10.128.6.132:7000/${clip.Thumbnail}`,
                    profileImage: `http://10.128.6.132:7000/${clip.Icon}`,
                }));
                const foundVideo = mappedVideos.find((clip) => clip.id === id);
                setVideo(foundVideo);

                // Initialize like/dislike counts (you can fetch from backend)
                setLikeCount(Math.floor(Math.random() * 10000));
                setDislikeCount(Math.floor(Math.random() * 500));

            } catch (err) {
                console.error("Error fetching videos:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchVideo();
    }, [id]);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikeCount(likeCount - 2);
        } else {
            setLiked(true);
            setLikeCount(likeCount + 1);
            if (disliked) {
                setDisliked(false);
                setDislikeCount(dislikeCount - 1);
            }
        }
    };

    const handleDislike = () => {
        if (disliked) {
            setDisliked(false);
            setDislikeCount(dislikeCount - 1);
        } else {
            setDisliked(true);
            setDislikeCount(dislikeCount + 1);
            if (liked) {
                setLiked(false);
                setLikeCount(likeCount - 1);
            }
        }
    };

    const handleSubscribe = () => {
        setSubscribed(!subscribed);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: video.title,
                text: video.description,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    const formatCount = (count) => {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + "M";
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + "K";
        }
        return count;
    };

    const handleSave = () => {
        setsaved(!saved);
    };

    if (loading)
        return <p className="loading">Loading video details...</p>;
    if
        (!video) return <p className="not-found">Video not found 😕</p>;

    return (
        <div className="video-detail-container">
            {/* Video Player */}
            <div className="video-player-wrapper">
                <video
                    src={video.videoURL}
                    poster={video.poster}
                    controls
                    className="video-player"
                />
            </div>

            {/* Video Info */}
            <div className="video-info">
                {/* Title */}
                <h2 className="video-title">{video.title}</h2>

                {/* Actions Bar */}
                <div className="video-actions">
                    <div className="video-stats">
                        <span>{formatCount(Math.floor(Math.random() * 100000))} views</span>
                        <span>•</span>
                        <span>{video.time}</span>
                    </div>

                    <div className="action-buttons">
                        {/* Like/Dislike Group */}
                        <div className="like-dislike-group">
                            <button
                                className={`action-btn ${liked ? "active" : ""}`}
                                onClick={handleLike}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"       //x,y,width,height
                                    fill={liked ? "currentColor" : "none"}  //inner color filling if liked
                                    stroke="currentColor"   //border
                                    strokeWidth="2"        //thickness
                                >
                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                                </svg>
                                <span>{formatCount(likeCount)}</span>
                            </button>


                            <button
                                className={`action-btn ${disliked ? "active" : ""}`}
                                onClick={handleDislike}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill={disliked ? "currentColor" : "none"}
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
                                </svg>
                                <span>{formatCount(dislikeCount)}</span>
                            </button>
                        </div>



                        {/* Share Button */}
                        <button type="button" className="action-btn" onClick={handleShare}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="18" cy="5" r="3" />
                                <circle cx="6" cy="12" r="3" />
                                <circle cx="18" cy="19" r="3" />
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                            </svg>
                            <span>Share</span>
                        </button>

                        {/* Download Button */}
                        <button className="action-btn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            <span>Download</span>
                        </button>

                        {/* Save Button */}
                        <button className="action-btn" onClick={handleSave}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                // fill="none"
                                fill={saved ? "currentColor" : "none"}
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                            <span>Save</span>
                        </button>
                    </div>
                </div>

                {/* Channel Info */}
                <div className="channel-info">
                    <img
                        src={video.profileImage}
                        alt={video.author}
                        className="channel-avatar"
                        onError={(e) => {
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";
                        }}
                    />

                    <div className="channel-details">
                        <h3 className="channel-name">{video.author}</h3>
                        <p className="channel-subscribers">
                            {formatCount(subs)} subscribers
                        </p>
                    </div>

                    <button
                        className={`subscribe-btn ${subscribed ? "subscribed" : ""}`}
                        onClick={handleSubscribe}
                    >
                        {subscribed ? "Subscribed" : "Subscribe"}
                    </button>
                </div>

                {/* Description */}
                <div className="video-description-wrapper">
                    <p
                        className={`video-description ${showFullDescription ? "" : "collapsed"
                            }`}
                    >
                        {video.description}
                    </p>
                    {video.description && video.description.length > 150 && (
                        <button
                            className="show-more-btn"
                            onClick={() => setShowFullDescription(!showFullDescription)}
                        >
                            {showFullDescription ? "Show less" : "Show more"}
                        </button>
                    )}

                    <div className="video-meta">
                        <p>
                            <strong>Category:</strong> {video.category}
                        </p>
                        <p>
                            <strong>Author:</strong> {video.author}
                        </p>
                        <p>
                            <strong>Uploaded:</strong> {video.time}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;
