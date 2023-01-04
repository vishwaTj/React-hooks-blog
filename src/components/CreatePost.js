import { useState } from "react";
import { firestore } from "../firebase";

function CreatePost() {
    const[title,setTitle] = useState();
    const[subtitle,setsubtitle] = useState();
    const[Content,setContent] = useState();


    function handleSubmit(e){
        e.preventDefault(); // so that on submit page does not get reloaded by default

      console.log('title',title);
      console.log('subtitle',subtitle);
      console.log('Content',Content);


      firestore.collection('posts').add({
        title,
        subtitle,
        Content,
        created_at:new Date()
      });

    }

    return <div className='create-Post'>
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
         <div className="form-field">
           <label>Title</label>
           <input values={title} onChange={(e)=>{ setTitle(e.target.value) }}/>
         </div>

         <div className="form-field">
           <label>Sub Title</label>
           <input values={subtitle} onChange={(e)=>{ setsubtitle(e.target.value) }}/>
         </div>

         <div className="form-field">
           <label>Content</label>
           <textarea values={Content} onChange={(e)=>{ setContent(e.target.value) }}></textarea>
         </div>

         

         <button className="create-post-btn">Create Post</button>
        </form>
    </div>
  }
  
  export default CreatePost;
  