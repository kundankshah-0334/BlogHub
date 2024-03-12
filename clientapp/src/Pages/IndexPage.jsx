import React, { useEffect, useState } from 'react'
import Post from '../component/post/Post'

function IndexPage() {
    const [posts , SetPosts] = useState([]);

    useEffect(() => {
        fetch('hhttps://blog-web-api.vercel.app/post').then(responce => {
          responce.json().then(posts => {
            SetPosts(posts);
          })
        })
    
      },[]);

  return (
     <>
        {posts.length  > 0 && posts.map(post => (
            <Post {...post} />
        ))}
     </>
  )
}

export default IndexPage
 