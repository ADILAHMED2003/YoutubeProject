// // import "./upload.css"
// // import { useNavigate } from "react-router-dom";
// // import { useLocation } from "react-router-dom";

// // export default function Upload() {
// //     const navigate = useNavigate()
// //     const location = useLocation()  
// //     return (
// //         <div className="topParent">
// //             <div className="uploadingInputs">
// //                 <div className="detail">
// //                     <h4>Details</h4>

// //                     <p>Title Required</p>
// //                     <textarea placeholder="Your Title" rows="6" cols="60" name="usrtxt" wrap="easy">
// //                     </textarea>

// //                     <p>Description</p>
// //                     <textarea placeholder="Tell Viewers About Your Videos" rows="10" cols="60" name="usrtxt" wrap="hard">
// //                     </textarea>
// //                     <p>Updated By</p>
// //                     <input />

// //                 </div>
// //                 <div className="thumbnail">
// //                     <h4>Thumbnail</h4>
// //                     <p>Set a thumbnail that stands out and draw veiwers attention.</p>
// //                     <input type="file" id="myfile" name="myfile" />
// //                 </div>
// //                 <div className="category">
// //                     <h4>Category</h4>
// //                     <p>Add your videos with the category to organize your content for viewers.</p>
// //                     <select name="Select" id="category">
// //                         <option value="Movie">Movie</option>
// //                         <option value="Content">Content</option>
// //                         <option value="Song">Song</option>
// //                         <option value="Divine">Divine</option>
// //                     </select>
// //                 </div>
// //             </div>
// //             <div className="videoUpload">
// //                 <h4>Upload your Video Here</h4>
// //                 <input type="file" id="myfile" name="myfile" />
// //                 <button onClick={() => {
// //                     navigate("/")
// //                 }}>Submit</button>

// //             </div>
// //         </div>
// //     )
// // }

// import { useState } from "react";
// import "./upload.css"
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// export default function Upload() {
//     const navigate = useNavigate()
//     const location = useLocation()

//     const [title, setTitle] = useState("")
//     // const [description,setDescription ]= useState()
//     // const [update,setUpdate ]= useState()
//     // const [thumbnail,setThumbnail ]= useState()
//     // const [category,setCategory ]= useState()
//     // const [video,setVideo ]= useState()

//     console.log("title", title);

//     return (
//         <div className="topParent">
//             <div className="uploadingInputs">
//                 <div className="detail">
//                     <h4>Details</h4>

//                     <p>Title Required</p>
//                     <textarea
//                         onChange={(text) => {
//                             setTitle(text.target.value)
//                         }}
//                         placeholder="Your Title" rows="6" cols="60" name="usrtxt" wrap="easy">
//                     </textarea>

//                     <p>Description</p>

//                     <textarea placeholder="Tell Viewers About Your Videos" rows="10" cols="60" name="usrtxt" wrap="hard">
//                     </textarea>

//                     <p>Updated By</p>
//                     <input />

//                 </div>
//                 <div className="thumbnail">
//                     <h4>Thumbnail</h4>
//                     <p>Set a thumbnail that stands out and draw veiwers attention.</p>
//                     <input type="file" id="myfile" name="myfile" />
//                 </div>
//                 <div className="category">
//                     <h4>Category</h4>
//                     <p>Add your videos with the category to organize your content for viewers.</p>
//                     <select name="Select" id="category">
//                         <option value="Movie">Movie</option>
//                         <option value="Content">Content</option>
//                         <option value="Song">Song</option>
//                         <option value="Divine">Divine</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="videoUpload">
//                 <h4>Upload your Video Here</h4>
//                 <input type="file" id="myfile" name="myfile" />
//                 <button onClick={() => {
//                     navigate("/", {
//                         state: { message: `hi ${title}` }
//                     })
//                 }}>
//                     Submit
//                 </button>



//             </div>
//         </div>
//     )
// }









//for frontend

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./upload.css";

// export default function Upload() {
//   const navigate = useNavigate();

//   // Form States
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [updatedBy, setUpdatedBy] = useState("");
//   const [category, setCategory] = useState("Movie");
//   const [thumbnail, setThumbnail] = useState(null);
//   const [video, setVideo] = useState(null);
//   const [profileImage, setProfileImage] = useState(null);

//   // Helper for file -> preview URL
//   const handleFileChange = (e, setter) => {
//     const file = e.target.files[0];
//     if (file) {
//       setter(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = () => {
//     if (!title || !video || !thumbnail || !profileImage) {
//       alert("Please fill all required fields");
//       return;
//     }

//     // Construct new video object (same structure as static ones)
//     const newVideo = {
//       title,
//       description,
//       author: updatedBy,
//       time: "Just now",
//       videoURL: video,
//       poster: thumbnail,
//       profileImage: profileImage,
//       image: "/dots.png", // keep your static 3-dot icon
//       category,
//     };

//     // Navigate back to home with new video
//     navigate("/", { state: { newVideo } });
//   };

//   return (
//     <div className="topParent">
//       <div className="uploadingInputs">
//         {/* Title */}
//         <div className="detail">
//           <h4>Details</h4>
//           <p>Title *</p>
//           <textarea
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter video title"
//             rows="3"
//             cols="60"
//           />

//           <p>Description</p>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter description"
//             rows="5"
//             cols="60"
//           />

//           <p>Updated By *</p>
//           <input
//             type="text"
//             value={updatedBy}
//             onChange={(e) => setUpdatedBy(e.target.value)}
//             placeholder="Channel / Author name"
//           />
//         </div>

//         {/* Thumbnail */}
//         <div className="thumbnail">
//           <h4>Thumbnail *</h4>
//           <p>Set a thumbnail that stands out and draws viewers’ attention.</p>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => handleFileChange(e, setThumbnail)}
//           />
//           {thumbnail && (
//             <img src={thumbnail} alt="Thumbnail Preview" width="200" />
//           )}
//         </div>

//         {/* Profile Image */}
//         <div className="profile">
//           <h4>Profile Icon *</h4>
//           <p>Upload a small profile/channel image.</p>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => handleFileChange(e, setProfileImage)}
//           />
//           {profileImage && (
//             <img src={profileImage} alt="Profile Preview" width="80" />
//           )}
//         </div>

//         {/* Category */}
//         <div className="category">
//           <h4>Category</h4>
//           <p>Organize your content for viewers.</p>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="Movie">Movie</option>
//             <option value="Content">Content</option>
//             <option value="Song">Song</option>
//             <option value="Divine">Divine</option>
//           </select>
//         </div>
//       </div>

//       {/* Video Upload */}
//       <div className="videoUpload">
//         <h4>Upload your Video *</h4>
//         <input
//           type="file"
//           accept="video/*"
//           onChange={(e) => handleFileChange(e, setVideo)}
//         />
//         {video && <video src={video} width="300" controls />}
//         <br />
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }





import { useState } from "react";
import "./upload.css"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";


export default function Upload() {
  const navigate = useNavigate()
  const location = useLocation()
  const [videoData, setvideoData] = useState({
    Title: "",
    Description: "",
    Updated_By: "",
    Icon: "",
    Thumbnail: "",
    Category: "",
    video_upload: ""
  });

  // const [title, setTitle] = useState("")
  // const [description,setDescription ]= useState()
  // const [update,setUpdate ]= useState()
  // const [thumbnail,setThumbnail ]= useState()
  // const [category,setCategory ]= useState()
  // const [video,setVideo ]= useState()

  // console.log("title", title);
  // const handleChanging = (e) => {
  //   setvideoData({ ...videoData, [e.target.name]: e.target.value });
  // }
  
  const handleChanging = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setvideoData({ ...videoData, [name]: files[0] }); // take the first file
    } else {
      setvideoData({ ...videoData, [name]: value });
    }
  };

  console.log(videoData)

  // const handleSubmiting = async () => {
  //   const { Title, Description, Updated_By, Icon, Thumbnail, Category, video_upload } = videoData;

  //   if (!Title || !Description || !Updated_By || !Icon || !Thumbnail || !Category || !video_upload) {
  //     alert("Please fill all the fields");
  //     console.log("something is missing", videoData);
  //     return;
  //   }
  //   else {
  //     try {
  //       console.log("Submitting video data:", videoData);
  //       const response = await axios.post("http://192.168.1.44:7000/user/youtube_upload", videoData);

  //       console.log("Server response:", response);
  //       localStorage.setItem("videoStore", true)
  //       localStorage.setItem("youtubeVideos", JSON.stringify(response.data))
  //       alert(response.data.message);

  //       navigate("/", {
  //         // state: [username]
  //       });
  //     }
  //     catch (error) {
  //       console.error("Error while uploading data:", error);

  //       if (error.response && error.response.data.message) {
  //         alert(error.response.data.message);
  //         console.log("Server error message:", error.response.data.message);
  //       } else {
  //         alert("Something went wrong. Please try again.");
  //       }
  //     }
  //   }
  // };


  const handleSubmiting = async (e) => {

    e.preventDefault();
    const { Title, Description, Updated_By, Icon, Thumbnail, Category, video_upload } = videoData;

    if (!Title || !Description || !Updated_By || !Icon || !Thumbnail || !Category || !video_upload) {
      alert("Please fill all the fields");
      console.log("fill all the field,you have missed something", videoData);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Title", Title);
      formData.append("Description", Description);
      formData.append("Updated_By", Updated_By);
      formData.append("Category", Category);
      formData.append("Icon", Icon);
      formData.append("Thumbnail", Thumbnail);
      formData.append("video_upload", video_upload);

      const response = await axios.post(
        "http://10.128.6.132:7000/user/youtube_upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Server response:", response.data);
      localStorage.setItem("videoStore", true);
      localStorage.setItem("youtubeVideos", JSON.stringify(response.data));
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      console.error("Error while uploading data:", error);
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      }
      else {
        alert("Something went wrong. Please try again.");
      }
    }
  };



  return (
    <div className="topParent">
      <div className="uploadingInputs">
        <div className="detail">
          <h4>Details</h4>

          <p>Title Required</p>
          <textarea onChange={handleChanging}
            name="Title" placeholder="Your Title" rows="6" cols="50" wrap="easy">
          </textarea>

          <p>Description</p>
          <textarea onChange={handleChanging} name="Description" placeholder="Tell Viewers About Your Videos" rows="8" cols="50" wrap="hard">
          </textarea>

          <p>Updated By</p>
          <input onChange={handleChanging} name="Updated_By" type="text" placeholder="Channel Name" />

        </div>

        <div>
          <h4>Icon</h4>
          <p>Set an side icon for your video.</p>
          <input className="iconInput" onChange={handleChanging} name="Icon" type="file" />

        </div>

        <div className="thumbnail">
          <h4>Thumbnail</h4>
          <p>Set a thumbnail that stands out and draw veiwers attention.</p>
          <input onChange={handleChanging} name="Thumbnail" type="file" />
        </div>
        
        <div className="category">
          <h4>Category</h4>
          <p>Add your videos with the category to organize your content.</p>
          <select onChange={handleChanging} name="Category" >
            <option value="">Select a category</option>
            <option value="All">All</option>
            <option value="Education">Education</option>
            <option value="Ad">Ad</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Gaming">Gaming</option>
            <option value="Music">Music</option>
            <option value="Indian Music">Indian Music</option>
            <option value="Tamil Music">Tamil Music</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Hollywood">Hollywood</option>
            <option value="Sports">Sports</option>
            <option value="Technology">Technology</option>
            <option value="Vlogs">Vlogs</option>
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
            <option value="Horror">Horror</option>
            <option value="Books">Books</option>
            <option value="DIY / Tutorials">DIY / Tutorials</option>
            <option value="Travel">Travel</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Animation">Animation</option>

          </select>
        </div>
      </div>

      <div className="videoUpload">
        <h4>Upload your Video Here</h4>
        <input name="video_upload" onChange={handleChanging} type="file" />
        <button onClick={handleSubmiting}>
          Submit
        </button>
      </div>
    </div>
  )
}

