import React, { useContext, useEffect } from 'react'
import postContext from '../context/posts/postContext';
import PostItem from './PostItem';




export default function Content() {



  const { posts, getPosts } = useContext(postContext);
  useEffect(() => {
    getPosts()
    // eslint-disable-next-line
  }, [])




  return (
    <div className='flex justify-start ml-64 mr-4 py-3'>
      <div className="flex flex-col gap-y-4">


        {posts.map((post) => {
          return <PostItem key={post._id} post={post} />;
        })}







      </div>
    </div>
  )
}
