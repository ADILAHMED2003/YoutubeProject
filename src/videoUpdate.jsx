// import "./videoUpdate.css"
// import React, { useState, useRef } from 'react';
// import { Upload, X, Check, Image, Film } from 'lucide-react';

// export default function VideoUpdate() {
//     const [formData, setFormData] = useState({
//         Title: '',
//         description: '',
//         updated_by: '',
//         category: ''
//     });

//     const [files, setFiles] = useState({
//         Icon: null,
//         Thumbnail: null
//     });

//     const [previews, setPreviews] = useState({
//         Icon: null,
//         Thumbnail: null
//     });

//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);

//     const iconInputRef = useRef(null);
//     const thumbnailInputRef = useRef(null);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleFileChange = (e, type) => {
//         const file = e.target.files[0];
//         if (file) {
//             setFiles(prev => ({ ...prev, [type]: file }));
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setPreviews(prev => ({ ...prev, [type]: reader.result }));
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const removeFile = (type) => {
//         setFiles(prev => ({ ...prev, [type]: null }));
//         setPreviews(prev => ({ ...prev, [type]: null }));
//         if (type === 'Icon') iconInputRef.current.value = '';
//         else thumbnailInputRef.current.value = '';
//     };

//     const handleSubmit = async () => {
//         setLoading(true);
//         setSuccess(false);

//         try {
//             const videoId = "YOUR_VIDEO_ID"; // replace with actual ID
//             const formDataToSend = new FormData();

//             Object.keys(formData).forEach(key => {
//                 if (formData[key]) formDataToSend.append(key, formData[key]);
//             });

//             if (files.Icon) formDataToSend.append('Icon', files.Icon);
//             if (files.Thumbnail) formDataToSend.append('Thumbnail', files.Thumbnail);

//             const response = await fetch(`http://localhost:5000/user/youtube_upload/${videoId}`, {
//                 method: 'PATCH',
//                 body: formDataToSend
//             });

//             const data = await response.json();
//             if (data.success) {
//                 setSuccess(true);
//                 setTimeout(() => setSuccess(false), 3000);
//             } else {
//                 alert('Failed to update video: ' + data.message);
//             }
//         } catch (err) {
//             console.error(err);
//             alert('Error updating video.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="video-update-page">
//             <header className="header">
//                 <div className="header-inner">
//                     <h1>Video Details</h1>

//                 </div>
//             </header>
//             <div className="align_parent">
//                 <main className="main-content">
//                     <div className="form-section">
//                         <h2>Details</h2>

//                         <label>Title <span className="required">*</span></label>
//                         <input
//                             type="text"
//                             name="Title"
//                             value={formData.Title}
//                             onChange={handleInputChange}
//                             placeholder="Add a title that describes your video"
//                         />

//                         <label>Description</label>
//                         <textarea
//                             name="description"
//                             value={formData.description}
//                             onChange={handleInputChange}
//                             placeholder="Tell viewers about your video"
//                             rows="5"
//                         />

//                         <label>Category</label>
//                         <select
//                             name="category"
//                             value={formData.category}
//                             onChange={handleInputChange}
//                         >
//                             <option value="">Select a category</option>
//                             <option value="All">All</option>
//                             <option value="Education">Education</option>
//                             <option value="Entertainment">Entertainment</option>
//                             <option value="Gaming">Gaming</option>
//                             <option value="Music">Music</option>
//                             <option value="Indian Music">Indian Music</option>
//                             <option value="Tamil Music">Tamil Music</option>
//                             <option value="Bollywood">Bollywood</option>
//                             <option value="Hollywood">Hollywood</option>
//                             <option value="Sports">Sports</option>
//                             <option value="Technology">Technology</option>
//                             <option value="Vlogs">Vlogs</option>
//                             <option value="Comedy">Comedy</option>
//                             <option value="Action">Action</option>
//                             <option value="Horror">Horror</option>
//                             <option value="Books">Books</option>
//                             <option value="DIY / Tutorials">DIY / Tutorials</option>
//                             <option value="Travel">Travel</option>
//                             <option value="Lifestyle">Lifestyle</option>
//                             <option value="Animation">Animation</option>
//                         </select>

//                         <label>Updated By</label>
//                         <input
//                             type="text"
//                             name="updated_by"
//                             value={formData.updated_by}
//                             onChange={handleInputChange}
//                             placeholder="Your name"
//                         />
//                     </div>



//                     <div className="form-section">
//                         <h2>Channel Icon</h2>
//                         <p className="note">Upload a custom icon for this video</p>
//                         {previews.Icon ? (
//                             <div className="icon-preview">
//                                 <img src={previews.Icon} alt="Icon" />
//                                 <button onClick={() => removeFile('Icon')} className="remove-btn small">
//                                     <X />
//                                 </button>
//                             </div>
//                         ) : (
//                             <div
//                                 onClick={() => iconInputRef.current.click()}
//                                 className="upload-circle"
//                             >
//                                 <Image className="upload-icon" />
//                                 <p>Upload</p>
//                             </div>
//                         )}
//                         <input
//                             ref={iconInputRef}
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handleFileChange(e, 'Icon')}
//                             className="hidden-input"
//                         />
//                     </div>
//                     <div className="form-section">
//                         <h2>Thumbnail</h2>
//                         <p className="note">Select or upload a picture that shows what's in your video</p>
//                         {previews.Thumbnail ? (
//                             <div className="preview-container">
//                                 <img src={previews.Thumbnail} alt="Thumbnail" />
//                                 <button onClick={() => removeFile('Thumbnail')} className="remove-btn">
//                                     <X />
//                                 </button>
//                             </div>
//                         ) : (
//                             <div
//                                 onClick={() => thumbnailInputRef.current.click()}
//                                 className="upload-box"
//                             >
//                                 <Film className="upload-icon" />
//                                 <p>Click to upload thumbnail</p>
//                                 <p className="file-info">PNG, JPG (max 2MB)</p>
//                             </div>
//                         )}
//                         <input
//                             ref={thumbnailInputRef}
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handleFileChange(e, 'Thumbnail')}
//                             className="hidden-input"
//                         />
//                     </div>
//                     <div>
//                         <button onClick={handleSubmit} disabled={loading} className="save-btn">
//                             {loading ? 'Saving...' : success ? (<><Check className="icon" /> Saved</>) : 'Save Changes'}
//                         </button>
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// }















// import "./videoUpdate.css"
// import React, { useState, useRef, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Upload, X, Check, Image, Film } from 'lucide-react';

// export default function VideoUpdate() {
//     const { id } = useParams(); // Get video ID from URL

//     const [formData, setFormData] = useState({
//         Title: '',
//         description: '',
//         updated_by: '',
//         category: ''
//     });

//     const [files, setFiles] = useState({
//         Icon: null,
//         Thumbnail: null
//     });

//     const [previews, setPreviews] = useState({
//         Icon: null,
//         Thumbnail: null
//     });

//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [fetchLoading, setFetchLoading] = useState(true);

//     const iconInputRef = useRef(null);
//     const thumbnailInputRef = useRef(null);

//     // Fetch video details on component mount
//     useEffect(() => {
//         const fetchVideoDetails = async () => {
//             try {
//                 setFetchLoading(true);
//                 const response = await axios.get("http://192.168.1.40:7000/user/get_videos");

//                 // Find the specific video by ID
//                 const video = response.data.find(v => v._id === id);

//                 if (video) {
//                     // Populate form data
//                     setFormData({
//                         Title: video.Title || '',
//                         description: video.Description || '',
//                         updated_by: video.Updated_By || '',
//                         category: video.Category || ''
//                     });

//                     // Set image previews if they exist
//                     if (video.Icon) {
//                         setPreviews(prev => ({
//                             ...prev,
//                             Icon: `http://192.168.1.40:7000/${video.Icon}`
//                         }));
//                     }

//                     if (video.Thumbnail) {
//                         setPreviews(prev => ({
//                             ...prev,
//                             Thumbnail: `http://192.168.1.40:7000/${video.Thumbnail}`
//                         }));
//                     }
//                 } else {
//                     alert('Video not found');
//                 }
//             } catch (err) {
//                 console.error("Error fetching video details:", err);
//                 alert('Error loading video details');
//             } finally {
//                 setFetchLoading(false);
//             }
//         };

//         if (id) {
//             fetchVideoDetails();
//         }
//     }, [id]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleFileChange = (e, type) => {
//         const file = e.target.files[0];
//         if (file) {
//             setFiles(prev => ({ ...prev, [type]: file }));
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setPreviews(prev => ({ ...prev, [type]: reader.result }));
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const removeFile = (type) => {
//         setFiles(prev => ({ ...prev, [type]: null }));
//         setPreviews(prev => ({ ...prev, [type]: null }));
//         if (type === 'Icon') iconInputRef.current.value = '';
//         else thumbnailInputRef.current.value = '';
//     };

//     const handleSubmit = async () => {
//         setLoading(true);
//         setSuccess(false);

//         try {
//             const formDataToSend = new FormData();

//             Object.keys(formData).forEach(key => {
//                 if (formData[key]) formDataToSend.append(key, formData[key]);
//             });

//             if (files.Icon) formDataToSend.append('Icon', files.Icon);
//             if (files.Thumbnail) formDataToSend.append('Thumbnail', files.Thumbnail);

//             const response = await fetch(`http://localhost:5000/user/youtube_upload/${id}`, {
//                 method: 'PATCH',
//                 body: formDataToSend
//             });

//             const data = await response.json();
//             if (data.success) {
//                 setSuccess(true);
//                 setTimeout(() => setSuccess(false), 3000);
//             } else {
//                 alert('Failed to update video: ' + data.message);
//             }
//         } catch (err) {
//             console.error(err);
//             alert('Error updating video.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Show loading state while fetching
//     if (fetchLoading) {
//         return (
//             <div className="video-update-page">
//                 <header className="header">
//                     <div className="header-inner">
//                         <h1>Loading Video Details...</h1>
//                     </div>
//                 </header>
//             </div>
//         );
//     }

//     return (
//         <div className="video-update-page">
//             <header className="header">
//                 <div className="header-inner">
//                     <h1>Video Details</h1>
//                 </div>
//             </header>
//             <div className="align_parent">
//                 <main className="main-content">
//                     <div className="form-section">
//                         <h2>Details</h2>

//                         <label>Title <span className="required">*</span></label>
//                         <input
//                             type="text"
//                             name="Title"
//                             value={formData.Title}
//                             onChange={handleInputChange}
//                             placeholder="Add a title that describes your video"
//                         />

//                         <label>Description</label>
//                         <textarea
//                             name="description"
//                             value={formData.description}
//                             onChange={handleInputChange}
//                             placeholder="Tell viewers about your video"
//                             rows="5"
//                         />

//                         <label>Category</label>
//                         <select
//                             name="category"
//                             value={formData.category}
//                             onChange={handleInputChange}
//                         >
//                             <option value="">Select a category</option>
//                             <option value="All">All</option>
//                             <option value="Education">Education</option>
//                             <option value="Entertainment">Entertainment</option>
//                             <option value="Gaming">Gaming</option>
//                             <option value="Music">Music</option>
//                             <option value="Indian Music">Indian Music</option>
//                             <option value="Tamil Music">Tamil Music</option>
//                             <option value="Bollywood">Bollywood</option>
//                             <option value="Hollywood">Hollywood</option>
//                             <option value="Sports">Sports</option>
//                             <option value="Technology">Technology</option>
//                             <option value="Vlogs">Vlogs</option>
//                             <option value="Comedy">Comedy</option>
//                             <option value="Action">Action</option>
//                             <option value="Horror">Horror</option>
//                             <option value="Books">Books</option>
//                             <option value="DIY / Tutorials">DIY / Tutorials</option>
//                             <option value="Travel">Travel</option>
//                             <option value="Lifestyle">Lifestyle</option>
//                             <option value="Animation">Animation</option>
//                         </select>

//                         <label>Updated By</label>
//                         <input
//                             type="text"
//                             name="updated_by"
//                             value={formData.updated_by}
//                             onChange={handleInputChange}
//                             placeholder="Your name"
//                         />
//                     </div>

//                     <div className="form-section">
//                         <h2>Channel Icon</h2>
//                         <p className="note">Upload a custom icon for this video</p>
//                         {previews.Icon ? (
//                             <div className="icon-preview">
//                                 <img src={previews.Icon} alt="Icon" />
//                                 <button onClick={() => removeFile('Icon')} className="remove-btn small">
//                                     <X />
//                                 </button>
//                             </div>
//                         ) : (
//                             <div
//                                 onClick={() => iconInputRef.current.click()}
//                                 className="upload-circle"
//                             >
//                                 <Image className="upload-icon" />
//                                 <p>Upload</p>
//                             </div>
//                         )}
//                         <input
//                             ref={iconInputRef}
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handleFileChange(e, 'Icon')}
//                             className="hidden-input"
//                         />
//                     </div>

//                     <div className="form-section">
//                         <h2>Thumbnail</h2>
//                         <p className="note">Select or upload a picture that shows what's in your video</p>
//                         {previews.Thumbnail ? (
//                             <div className="preview-container">
//                                 <img src={previews.Thumbnail} alt="Thumbnail" />
//                                 <button onClick={() => removeFile('Thumbnail')} className="remove-btn">
//                                     <X />
//                                 </button>
//                             </div>
//                         ) : (
//                             <div
//                                 onClick={() => thumbnailInputRef.current.click()}
//                                 className="upload-box"
//                             >
//                                 <Film className="upload-icon" />
//                                 <p>Click to upload thumbnail</p>
//                                 <p className="file-info">PNG, JPG (max 2MB)</p>
//                             </div>
//                         )}
//                         <input
//                             ref={thumbnailInputRef}
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handleFileChange(e, 'Thumbnail')}
//                             className="hidden-input"
//                         />
//                     </div>

//                     <div>
//                         <button onClick={handleSubmit} disabled={loading} className="save-btn">
//                             {loading ? 'Saving...' : success ? (<><Check className="icon" /> Saved</>) : 'Save Changes'}
//                         </button>
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// }










import "./videoUpdate.css"
import React, { useState, useRef, useEffect } from 'react';
// import { Navigate, useParams } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Upload, X, Check, Image, Film } from 'lucide-react';

export default function VideoUpdate() {
    const navigate = useNavigate();

    const { id } = useParams(); // Get video ID from URL

    const [formData, setFormData] = useState({
        Title: '',
        description: '',
        updated_by: '',
        category: ''
    });

    const [files, setFiles] = useState({
        Icon: null,
        Thumbnail: null
    });

    const [previews, setPreviews] = useState({
        Icon: null,
        Thumbnail: null
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fetchLoading, setFetchLoading] = useState(true);

    const iconInputRef = useRef(null);
    const thumbnailInputRef = useRef(null);

    // Fetch video details on component mount
    useEffect(() => {
        const fetchVideoDetails = async () => {
            try {
                setFetchLoading(true);
                const response = await axios.get("http://10.128.6.132:7000/user/get_videos");

                // Find the specific video by ID
                const video = response.data.find(v => v._id === id);

                if (video) {
                    // Populate form data
                    setFormData({
                        Title: video.Title || '',
                        description: video.Description || '',
                        updated_by: video.Updated_By || '',
                        category: video.Category || ''
                    });

                    // Set image previews if they exist
                    if (video.Icon) {
                        setPreviews(prev => ({
                            ...prev,
                            Icon: `http://10.128.6.132:7000/${video.Icon}`
                        }));
                    }

                    if (video.Thumbnail) {
                        setPreviews(prev => ({
                            ...prev,
                            Thumbnail: `http://10.128.6.132:7000/${video.Thumbnail}`
                        }));
                    }
                } else {
                    alert('Video not found');
                }
            } catch (err) {
                console.error("Error fetching video details:", err);
                alert('Error loading video details');
            } finally {
                setFetchLoading(false);
            }
        };

        if (id) {
            fetchVideoDetails();
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            setFiles(prev => ({ ...prev, [type]: file }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(prev => ({ ...prev, [type]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const removeFile = (type) => {
        setFiles(prev => ({ ...prev, [type]: null }));
        setPreviews(prev => ({ ...prev, [type]: null }));
        if (type === 'Icon') iconInputRef.current.value = '';
        else thumbnailInputRef.current.value = '';
    };

    const handleSubmit = async () => {
        setLoading(true);
        setSuccess(false);

        try {
            const formDataToSend = new FormData();

            // Append form fields - match backend field names
            if (formData.Title) formDataToSend.append('Title', formData.Title);
            if (formData.description) formDataToSend.append('Description', formData.description);
            if (formData.updated_by) formDataToSend.append('Updated_By', formData.updated_by);
            if (formData.category) formDataToSend.append('Category', formData.category);

            // Append file uploads
            if (files.Icon) formDataToSend.append('Icon', files.Icon);
            if (files.Thumbnail) formDataToSend.append('Thumbnail', files.Thumbnail);

            const response = await axios.patch(
                `http://10.128.6.132:7000/user/youtube_upload/${id}`,
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            if (response.data.success) {
                setSuccess(true);
                alert('Video updated successfully!✅');
                navigate("/");
                setTimeout(() => setSuccess(false), 3000);
            } else {
                alert('Failed to update video: ' + response.data.message);
            }
        } catch (err) {
            console.error('Error updating video:', err);
            alert('Error updating video: ' + (err.response?.data?.message || err.message));
        } finally {
            setLoading(false);
        }
    };

    // Show loading state while fetching
    if (fetchLoading) {
        return (
            <div className="video-update-page">
                <header className="header">
                    <div className="header-inner">
                        <h1>Loading Video Details...</h1>
                    </div>
                </header>
            </div>
        );
    }

    return (
        <div className="video-update-page">
            <header className="header">
                <div className="header-inner">
                    <h1>Video Details</h1>
                </div>
            </header>
            <div className="align_parent">
                <main className="main-content">
                    <div className="form-section">
                        <h2>Details</h2>

                        <label>Title <span className="required">*</span></label>
                        <input
                            type="text"
                            name="Title"
                            value={formData.Title}
                            onChange={handleInputChange}
                            placeholder="Add a title that describes your video"
                        />

                        <label>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Tell viewers about your video"
                            rows="5"
                        />

                        <label>Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                        >
                            <option value="">Select a category</option>
                            <option value="All">All</option>
                            <option value="Education">Education</option>
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

                        <label>Updated By</label>
                        <input
                            type="text"
                            name="updated_by"
                            value={formData.updated_by}
                            onChange={handleInputChange}
                            placeholder="Your name"
                        />
                    </div>

                    <div className="form-section">
                        <h2>Channel Icon</h2>
                        <p className="note">Upload a custom icon for this video</p>
                        {previews.Icon ? (
                            <div className="icon-preview">
                                <img src={previews.Icon} alt="Icon" />
                                <button onClick={() => removeFile('Icon')} className="remove-btn small">
                                    <X />
                                </button>
                            </div>
                        ) : (
                            <div
                                onClick={() => iconInputRef.current.click()}
                                className="upload-circle"
                            >
                                <Image className="upload-icon" />
                                <p>Upload</p>
                            </div>
                        )}
                        <input
                            ref={iconInputRef}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'Icon')}
                            className="hidden-input"
                        />
                    </div>

                    <div className="form-section">
                        <h2>Thumbnail</h2>
                        <p className="note">Select or upload a picture that shows what's in your video</p>
                        {previews.Thumbnail ? (
                            <div className="preview-container">
                                <img src={previews.Thumbnail} alt="Thumbnail" />
                                <button onClick={() => removeFile('Thumbnail')} className="remove-btn">
                                    <X />
                                </button>
                            </div>
                        ) : (
                            <div
                                onClick={() => thumbnailInputRef.current.click()}
                                className="upload-box"
                            >
                                <Film className="upload-icon" />
                                <p>Click to upload thumbnail</p>
                                <p className="file-info">PNG, JPG (max 2MB)</p>
                            </div>
                        )}
                        <input
                            ref={thumbnailInputRef}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'Thumbnail')}
                            className="hidden-input"
                        />
                    </div>

                    <div>
                        <button onClick={handleSubmit} disabled={loading} className="save-btn">
                            {loading ? 'Saving...' : success ? (<><Check className="icon" /> Saved</>) : 'Save Changes'}
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}