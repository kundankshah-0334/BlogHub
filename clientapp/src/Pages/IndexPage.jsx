import React, { useEffect, useState } from 'react'
import Post from '../component/post/Post'

function IndexPage() {
    const [posts , SetPosts] = useState([]);

    // useEffect(() => {
    //     fetch('https://blog-hub-api.vercel.app/post').then(responce => {
    //       responce.json().then(posts => {
    //         SetPosts(posts);
    //       })
    //     })
    
    //   },[]);

    useEffect(() => {
      fetch('https://blog-hub-api.vercel.app/post')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(posts => {
          SetPosts(posts);
        })
        .catch(error => {
          console.error(error);
          // Handle the error accordingly, e.g., show an error message to the user
        });
    }, []);

  return (
     <>
        {posts.length  > 0 && posts.map(post => (
            <Post {...post} />
        ))}
     </>
  )
}

export default IndexPage
 