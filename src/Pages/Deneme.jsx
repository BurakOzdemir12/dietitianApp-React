// import { Box, Button, Container } from "@mui/material";
// import React, { useState, useCallback, useEffect } from "react";

// import "froala-editor/css/froala_style.min.css";
// import "froala-editor/css/froala_editor.pkgd.min.css";
// import "froala-editor/css/froala_style.min.css";
// import "froala-editor/css/plugins/image.min.css";
// import "froala-editor/css/plugins/video.min.css";

// import FroalaEditor from "react-froala-wysiwyg";
// import "froala-editor/js/froala_editor.pkgd.min.js";
// import "froala-editor/js/plugins/image.min.js";
// import "froala-editor/js/plugins/video.min.js";
// import "froala-editor/js/plugins/align.min.js";
// import "froala-editor/js/plugins/char_counter.min.js";
// import "froala-editor/js/plugins/code_view.min.js";
// import "froala-editor/js/plugins/colors.min.js";
// import "froala-editor/js/plugins/draggable.min.js";
// import "froala-editor/js/plugins/emoticons.min.js";
// import "froala-editor/js/plugins/entities.min.js";
// import "froala-editor/js/plugins/file.min.js";
// import "froala-editor/js/plugins/font_family.min.js";
// import "froala-editor/js/plugins/font_size.min.js";
// import "froala-editor/js/plugins/fullscreen.min.js";
// import "froala-editor/js/plugins/help.min.js";
// import "froala-editor/js/plugins/image_manager.min.js";
// import "froala-editor/js/plugins/inline_style.min.js";
// import "froala-editor/js/plugins/line_breaker.min.js";
// import "froala-editor/js/plugins/paragraph_format.min.js";
// import "froala-editor/js/plugins/paragraph_style.min.js";
// import "froala-editor/js/plugins/quote.min.js";
// import "froala-editor/js/plugins/special_characters.min.js";
// import "froala-editor/js/plugins/table.min.js";
// import "froala-editor/js/plugins/url.min.js";
// import "froala-editor/js/plugins/word_paste.min.js";
// import "froala-editor/js/third_party/image_tui.min.js";

// import useFetch from "../hooks/useFetch";
// import { urlBlogs } from "../endpoints";
// import FroalaEditorImg from "react-froala-wysiwyg/FroalaEditorImg";
// import FrolaEditor from "../Components/FrolaEditor";
// import useCrud from "../hooks/useCRUD";
// import { Form, FormGroup, Input, Label } from "reactstrap";

// const Deneme = () => {
//   const { data, loading, error } = useFetch(urlBlogs);
//   const { createData } = useCrud();

//   const [content, setContent] = useState("");
//   const [description, setDescription] = useState("");
//   const handleModelChange = (newContent) => {
//     setContent(newContent);
//   };
//   //descriptionu html e çevirip almana yarıcak id sini girilen useparamsa göre yapılandırılacak
//   useEffect(() => {
//     if (data && data[0].description) {
//       setDescription(data[0]?.description); // description alanını state'e atıyoruz
//     }
//   }, [data]);
//   console.log(content);

//   const handleSubmit = async () => {
//     const datab = { name: "a", description: content, img: "" };
//     try {
//       await createData(urlBlogs, datab);
//       alert("başarılı");
//     } catch (error) {
//       console.log("kayıt işlemi sırasında hata oluştu", error);
//     }
//   };
//   console.log(data[1].description);

//   ///
//   return (
//     <Box height="auto">
//       <FrolaEditor content={content} setModel={setContent} />
//       <br></br>
//       <FormGroup>
//         <Label for="categoryIds">Category ID</Label>
//         <Input
//           type="text"
//           id="categoryIds"
//           name="categoryIds"
//           placeholder="Kategori ID'sini girin (örn: 1,2,3)"
//         />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleFile">File</Label>
//         <Input type="file" id="img" name="img" accept="image/*" required />
//       </FormGroup>
//       <Button type="submit" disabled={loading}>
//         Kaydet
//       </Button>
//       <Container maxWidth="xl">
//         {" "}
//         {/* {data.map((item)=>(
//             <h4>{item.description}</h4>
//           ))} */}
//         <Box
//           sx={{ color: "black" }}
//           dangerouslySetInnerHTML={{ __html: description }}
//         ></Box>
//       </Container>
//     </Box>
//   );
// };

// export default Deneme;

// src/components/CreateBlogForm.js
import React, { useEffect, useState } from "react";
import { postData } from "../services/apiServices";
import { urlBlogCategories, urlBlogs } from "../endpoints";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const CreateBlogForm = () => {
  const { data, loading, error } = useFetch(urlBlogCategories);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [categoryIds, setCategoryIds] = useState([]); 
  const [BlogCategories,setBlogCategories]=useState('')
  const [selectedCategories, setSelectedCategories] = useState([]); 

  useEffect(() => {
    if (data) {
      setBlogCategories(data);
    }
  }, [data]);
  

console.log(BlogCategories)
  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(categoryId)) {
        // Eğer zaten seçiliyse, çıkar
        return prevSelected.filter((id) => id !== categoryId);
      } else {
        // Seçili değilse, ekle
        return [...prevSelected, categoryId];
      }
    });
  };
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Description", description);
    if (image) {
      formData.append("Image", image); 
    }
    
    selectedCategories.forEach((categoryId) => {
      formData.append("CategoryIds", categoryId);
    });

    try {
      const response = await axios.post(urlBlogs, formData);
      console.log("Response:", response);
    } catch (error) {
      console.error("Error Posting data:", error.response?.data || error);
    }
  };

  return (
    <form className="text-dark" onSubmit={handleSubmit}>
      <div>
        <label>Blog Adı:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Açıklama:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Görsel Yükle:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <div>
        <label>Kategoriler: </label>
        {data?.map((category) => (
          <div key={category.id}>
            <input
              type="checkbox"
              value={category.id}
              checked={selectedCategories.includes(category.id)}
              onChange={() => handleCategoryChange(category.id)}
            />
            <label>{category.name}</label>
          </div>
        ))}
      </div>
      <button type="submit">Blog Oluştur</button>
    </form>
  );
};

export default CreateBlogForm;
