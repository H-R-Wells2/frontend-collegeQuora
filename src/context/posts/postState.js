import React from "react";
import postContext from "./postContext";
import { useState } from "react";


const PostState = (props) => {

  const host = "http://localhost:5000"

  const postsInitial = []
  const [posts, setPosts] = useState(postsInitial)
  const [searchedPosts, setSearchedPosts] = useState([]);

  // Try temp const by pushing value in text

  // state for imagefile
  const [file, setFile] = useState();






  // Get all posts
  const getPosts = async () => {
    try {
      const response = await fetch(`${host}/api/posts/fetchallposts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        const json = await response.json();
        setPosts(json);
      }
    } catch (error) {
      console.error(error);
    }
  };










  // Get searched posts
  // To search posts
  const [searchParams, setSearchParams] = useState({
    title: ''
  });
  const getSearchedPosts = async () => {
    // To-Do API call
    // API call
    try {
      const response = await fetch(`${host}/api/posts/search?title=${searchParams.title}&description=${searchParams.title}&tag=${searchParams.title}`);
      const data = await response.json();
      setSearchedPosts(data);
    } catch (error) {
      console.log(error);
    }
  }












  // Add post
  const addPost = async (title, description, tag) => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('tag', tag);
      formData.append('attachedImage', file);

      const response = await fetch(`${host}/api/posts/addpost`, {
        method: 'POST',
        headers: {
          'auth-token': localStorage.getItem('token'),
        },
        body: formData,
      });

      if (response.status === 200) {
        const post = await response.json();
        setPosts((prevPosts) => [...prevPosts, post]);
      }
    } catch (error) {
      console.error(error);
    }
  };















  // Delete post
  const deletePost = async (id) => {
    // To-Do API call
    const response = await fetch(`${host}/api/posts/deletepost/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = response.json();
    console.log(json)


    // console.log("Deleting Post " + id);
    const newPosts = posts.filter((post) => { return post._id !== id })
    setPosts(newPosts)

  }









  // Edit post
  const editPost = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/posts/updatepost/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.table(json);


    let newPosts = JSON.parse(JSON.stringify(posts))
    // Logic to edit in client
    for (let index = 0; index < newPosts.length; index++) {
      const element = newPosts[index];
      if (element._id === id) {
        newPosts[index].title = title;
        newPosts[index].description = description;
        newPosts[index].tag = tag;
        break;
      }
    }
    setPosts(newPosts);
  }








  return (
    <postContext.Provider value={{ posts, deletePost, editPost, getPosts, addPost, setFile, searchedPosts, setSearchedPosts, getSearchedPosts, searchParams, setSearchParams }}>
      {props.children}
    </postContext.Provider>
  )
}


export default PostState;