import React, { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import postContext from '../context/posts/postContext';
import PostItem from './PostItem';





export default function Content() {
  const { posts, getPosts } = useContext(postContext);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = () => {
    // Fetch more posts when the user reaches the last post
    if (posts.length % 4 !== 0) {
      setHasMore(false);
      return;
    }
    getPosts(posts.length);
  };

  return (
    <div className='flex justify-start ml-64 mr-4 py-3'>
      <div className='flex flex-col gap-y-4'>

        <InfiniteScroll dataLength={posts.length} next={fetchMoreData} hasMore={hasMore} loader={<h4>Loading...</h4>} endMessage={<h4>No more posts to show</h4>}>


          {posts.map((post) => {
            return <PostItem key={post._id} post={post} />;
          })}


        </InfiniteScroll>

      </div>
    </div>
  );
}
