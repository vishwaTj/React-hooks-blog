import { useState } from "react";
import { firestore } from "../firebase";
import {useFormInput} from '../hooks';


function CreatePost() {
    const title = useFormInput('');
    const subtitle = useFormInput('');
    const Content = useFormInput('');
    

    function handleSubmit(e){
        e.preventDefault(); // so that on submit page does not get reloaded by default

      console.log('title',title);
      console.log('subtitle',subtitle);
      console.log('Content',Content);


      firestore.collection('posts').add({
        title:title.value,
        subtitle:subtitle.value,
        Content:Content.value,
        created_at:new Date()
      });

    }

    return <div className='create-post'>
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
         <div className="form-field">
           <label>Title</label>
           {/* using spread operator because the function returns an object containing both conditions */}
           <input {...title}/>
         </div>

         <div className="form-field">
           <label>Sub Title</label>
           <input {...subtitle}/>
         </div>

         <div className="form-field">
           <label>Content</label>
           <textarea {...Content}></textarea>
         </div>

         

         <button className="create-post-btn">Create Post</button>
        </form>
    </div>
  }
  
  export default CreatePost;
  