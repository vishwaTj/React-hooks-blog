import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { firestore } from "../firebase";

function PostDetail() {
  const [post,setPost] = useState({});
  const {postId} = useParams();

  useEffect(()=>{
    firestore
    .collection('posts')
    .doc(postId)
    .get()
    .then((snapshot)=>{
              console.log('snapshot',snapshot.data());
              setPost(snapshot.data());
            })
  },[]);
    return (
    <div className='post-detail'>
      <h1>{post.title}</h1>
      {/* {console.log(post)} */}
      <p>{post.Content}</p>

    </div>
    );
  }
  
  export default PostDetail;
// import { useEffect, useState } from "react";
// import { firestore } from "../firebase";
// import { useParams } from "react-router-dom";

// function PostDetail() {
//   const [post, setPost] = useState({});
//   const { postId } = useParams();
//   console.log("postId", postId);
//   useEffect(() => {
//     firestore
//       .collection("posts")
//       .doc(postId)
//       .get()
//       .then((snapshot) => {
//         console.log(snapshot.data());
//         setPost(snapshot.data());
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div className="post-detail">
//       <h1>{post.title}</h1>
//       <p>{post.Content}</p>
//     </div>
//   );
// }

// export default PostDetail;