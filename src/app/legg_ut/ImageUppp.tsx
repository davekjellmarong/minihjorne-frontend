// import "./styles.css";
// import React, { useState } from "react";

// export default function ImageUppp() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   let file = new FormData();
//   file.append("files", selectedFile);

//   let formData = new FormData();
//   formData.append("fullName", name);
//   formData.append("companyName", company);
//   formData.append("email", email);
//   formData.append("phoneNumber", phone);
//   formData.append("team", phone);
//   formData.append("files", selectedFile);
//   formData.append("message", message);
//   const handleSubmit = () => {
//     const data = {
//       data: {
//         title,
//         description,
//       },
//     };
//     postData(data, imageFile);
//     console.log(title, description);
//     setTitle("df");
//     setDescription("df");
//   };

//   const handleFileChange = (event: any) => {
//     const file = event.target.files[0];
//     setImageFile(file);
//   };

//   return (
//     <div className="container">
//       <input
//         type="text"
//         value={title}
//         onChange={(e: any) => setTitle(e.target.value)}
//         required
//       />

//       <input
//         type="text"
//         value={description}
//         onChange={(e: any) => setDescription(e.target.value)}
//         required
//       />

//       <input type="file" onChange={handleFileChange} />

//       <button onClick={handleSubmit}>Upload</button>
//     </div>
//   );
// }
