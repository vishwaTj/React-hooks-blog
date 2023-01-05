import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';

// library to write css in javascript
import styled from 'styled-components';

// thses are template literals which can be used to style any specific element
const BlogHeading = styled.h1`
   text-align: center;
   color: #2196f3;
   margin-bottom: 2px;
`;

const PostSubTitle = styled.p`
   font-size: 13px;
`;

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    firestore.collection('posts').get().then((snapshot)=>{
      const posts = snapshot.docs.map((doc) => {
        return {
          id:doc.id,
          ...doc.data()
        };
      });
      console.log('posts',posts);
      setPosts(posts);
    });
   },[])// to avoid continuous recall of firebase we give empty array

    return( 
    <div className='home'>
      <h1 style={styles.heading}>Tech blog</h1>
      <div id="blog-by">vishwa</div>
 
      {posts.map((post,index)=>(
        <div className='post' key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <PostSubTitle>{post.subtitle}</PostSubTitle>
          </div>
      ))}
 
    </div>
    );
  }
  
  export default Home;
  
  const styles = {
    heading:{
      marginTop:30,
      fontSize:56
    },

  }