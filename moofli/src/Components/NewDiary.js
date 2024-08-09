import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import Sidebar from './Sidebar';
import './NewDiary.css';


Quill.register('modules/imageUploader', ImageUploader);

const NewDiary = () => {
  const [editorState, setEditorState] = useState('');

  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        'image': function() {
          const input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');
          input.click();

          input.onchange = async () => {
            const file = input.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              const range = this.quill.getSelection();
              this.quill.insertEmbed(range.index, 'image', reader.result);
            };
          };
        }
      }
    },
    imageUploader: {
      upload: file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            resolve(reader.result);
          });
          reader.readAsDataURL(file);
        });
      }
    }
  };

  const handleDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <div className="new-diary-page">
      <Sidebar />
      <div className="diary-entry-container">
        <div className="diary-header">
          <span>{handleDate()}</span>
        </div>
        <ReactQuill 
          value={editorState}
          onChange={setEditorState}
          modules={modules}
          placeholder="What's on your mind?"
          className="diary-entry"
        />
        <div id="toolbar" className="editor-options">
          <button className="editor-button ql-bold"><b>B</b></button>
          <button className="editor-button ql-italic"><i>I</i></button>
          <button className="editor-button ql-underline"><u>U</u></button>
          <button className="editor-button ql-align" value="center">Align</button>
          <button className="editor-button ql-image">Image</button>
        </div>
      </div>
    </div>
  );
};

export default NewDiary;
