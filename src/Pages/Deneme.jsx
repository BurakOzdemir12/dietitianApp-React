import { Box, Button, Container } from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/plugins/image.min.css";
import "froala-editor/css/plugins/video.min.css";

import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/video.min.js";
import "froala-editor/js/plugins/align.min.js";
import "froala-editor/js/plugins/char_counter.min.js";
import "froala-editor/js/plugins/code_view.min.js";
import "froala-editor/js/plugins/colors.min.js";
import "froala-editor/js/plugins/draggable.min.js";
import "froala-editor/js/plugins/emoticons.min.js";
import "froala-editor/js/plugins/entities.min.js";
import "froala-editor/js/plugins/file.min.js";
import "froala-editor/js/plugins/font_family.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import "froala-editor/js/plugins/fullscreen.min.js";
import "froala-editor/js/plugins/help.min.js";
import "froala-editor/js/plugins/image_manager.min.js";
import "froala-editor/js/plugins/inline_style.min.js";
import "froala-editor/js/plugins/line_breaker.min.js";
import "froala-editor/js/plugins/paragraph_format.min.js";
import "froala-editor/js/plugins/paragraph_style.min.js";
import "froala-editor/js/plugins/quote.min.js";
import "froala-editor/js/plugins/special_characters.min.js";
import "froala-editor/js/plugins/table.min.js";
import "froala-editor/js/plugins/url.min.js";
import "froala-editor/js/plugins/word_paste.min.js";
import "froala-editor/js/third_party/image_tui.min.js";

import useFetch from "../hooks/useFetch";
import { urlBlogs } from "../endpoints";
import FroalaEditorImg from "react-froala-wysiwyg/FroalaEditorImg";
import FrolaEditor from "../Components/FrolaEditor";
import useCrud from "../hooks/useCRUD";

const Deneme = () => {
  const { data, loading, error } = useFetch(urlBlogs);
  const { createData } = useCrud();

  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const handleModelChange = (newContent) => {
    setContent(newContent);
  };
  //descriptionu html e çevirip almana yarıcak id sini girilen useparamsa göre yapılandırılacak
  useEffect(() => {
    if (data && data[7].description) {
      setDescription(data[7]?.description); // description alanını state'e atıyoruz
    }
  }, [data]);
  //     console.log(content);

  const handleSubmit = async () => {
    const datab = { name: "deneme", description: content, img: "" };
    try {
      await createData(urlBlogs, datab);
      alert("başarılı");
    } catch (error) {
      console.log("kayıt işlemi sırasında hata oluştu", error);
    }
  };
  // console.log(data[1].description);

  ///
  return (
    <Box height="100%">
      {/* {data.map((item) => (
        <Box key={item.id}>
          <h1>{item.name}</h1>
          <h5>{item.description}</h5>
        </Box>
      ))} */}
      <FrolaEditor content={content} setModel={setContent} />
      <br></br>
      <Button onClick={handleSubmit} disabled={loading}>
        Kaydet
      </Button>
      <Box>
        <Container maxWidth="xl">
          {" "}
          <Box dangerouslySetInnerHTML={{ __html: description }} />
        </Container>
      </Box>
    </Box>
  );
};

export default Deneme;
