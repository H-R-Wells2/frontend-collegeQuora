// import { useState, useEffect } from 'react';
// import React, { useContext } from 'react'
// import modeContext from '../context/mode/modeContext';
// import postContext from '../context/posts/postContext';

// export default function SelectedPost(props) {


//     // getting states from context
//     const { mainBox, textMain } = useContext(modeContext)
//     const { host } = useContext(postContext)

//   // state for selectedPost
//   const [selectedPost, setSelectedPost] = useState();
    
//     const url = window.location.href;
//     const parts = url.split('/');
//     const postId = parts[parts.length - 1];
    
//   // Get single post
//   const getSelectedPost = async (id) => {
//     try {
//       const response = await fetch(`${host}/api/posts/${id}`, {
//         headers: {
//           'Content-Type': 'application/json',
//           "auth-token": localStorage.getItem('token')
//         },
//       });
//       const data = await response.json();
//       setSelectedPost(data);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }


//   useEffect(() => {
//     getSelectedPost(postId);
//     // console.log(selectedPost.title)
//   }, [])
  


    



//     return (
//         <div className='flex justify-start ml-64 mr-4 py-3'>
//             <div className="flex flex-col gap-y-4">



//                 <div className={`shadow-lg text-center justify-center py-10 rounded-lg max-w-2xl transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
//                     <div className='text-4xl flex font-semibold justify-center'>
//                         <span className='mx-2'>Temp</span>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

