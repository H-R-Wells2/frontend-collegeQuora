import React, { useContext, useEffect } from 'react';
import modeContext from '../context/mode/modeContext';
import postContext from '../context/posts/postContext';
import PostItem from './PostItem';
import nothingMatched from "./nothingMatched.png"


export default function Content() {
  const { searchedPosts, searchParams } = useContext(postContext);
  const { textMain2, alert } = useContext(modeContext);

//   // to show alert if there is data available or not
  useEffect(() => {
    if (searchedPosts.length === 0) {
        alert('error', 'No results found');
    } else {
        alert('success', "Showing search results for " + searchParams.title);
    }
    console.log(searchedPosts)
}, [searchedPosts])


  return (
    <div className="flex justify-start ml-64 mr-4 py-3">
      {searchedPosts.length === 0 ? (
        <div className={`flex flex-col items-center justify-center gap-y-4 ml-10 mt-10 transition ease-in-out duration-500 ${textMain2}`}>
          <img alt='' className="" src={nothingMatched} />
          <p className="text-xl font-bold ">Oh crap!</p>
          <p className="text-lg font-medium ">You've got nothing.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-y-4">
          {searchedPosts.map((post) => {
            return <PostItem key={post._id} post={post} />;
          })}
        </div>
      )}
    </div>
  );
}
