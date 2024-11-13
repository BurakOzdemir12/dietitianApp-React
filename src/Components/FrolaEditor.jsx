import React, { useState } from "react";
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
import { Box } from "@mui/material";
import { urlBlogs } from "../endpoints";

const FrolaEditor = ({ content, setModel,blogId }) => {

  const handleModelChange = (newContent) => {
       setModel(newContent); // Üst bileşene içeriği aktar
     };
  return  <div style={{ maxWidth: '90%', margin: 'auto', paddingTop: '20px' }}>
  <h2>İçerik Düzenleyici</h2>
  <FroalaEditor
    tag='textarea'
    model={content}
    onModelChange={handleModelChange}
    config={{
      placeholderText: 'İçeriğinizi buraya yazın...',
      toolbarButtons: [
        'bold', 'italic', 'underline', 'strikeThrough', '|',
        'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphFormat', '|',
        'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '|',
        'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|',
        'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|',
        'undo', 'redo', 'fullscreen', 'html'
      ],
      pluginsEnabled: [
        'align', 'charCounter', 'codeView', 'colors', 'draggable', 'emoticons',
        'entities', 'file', 'fontFamily', 'fontSize', 'fullscreen', 'image',
        'imageManager', 'inlineStyle', 'lineBreaker', 'link', 'lists', 'paragraphFormat',
        'paragraphStyle', 'quote', 'save', 'table', 'url', 'video', 'wordPaste'
      ],
      // imageUpload: true,
      // imageUploadURL: `${urlBlogs}/uploads/blog`,
      // imageUploadMethod: 'POST',
      // imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif', 'webp'],
      // videoUpload: true,
    }}
  />
  {/* <div style={{ marginTop: '20px' }}>
    <h3>Güncel İçerik:</h3>
    <Box maxWidth={"100%"} dangerouslySetInnerHTML={{ __html: content }} />
  </div> */}
</div>
};

export default FrolaEditor;
