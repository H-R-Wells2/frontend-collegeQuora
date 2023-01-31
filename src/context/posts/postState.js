import React from "react";
import postContext from "./postContext";
import { useState } from "react";


const PostState = (props) => {

  const host = "http://localhost:5000"

  const postsInitial = []
  const [posts, setPosts] = useState(postsInitial)
  // Try temp const by pushing value in text







  // Get all posts
  const getPosts = async () => {
    // To-Do API call
    // API call
    const response = await fetch(`${host}/api/posts/fetchallposts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json()
    setPosts(json)
  }











  // Add post
  const addPosts = async (title, description, tag) => {
    // To-Do API call
    // API call
    const response = await fetch(`${host}/api/posts/addpost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });


    const post = await response.json();
    setPosts(posts.concat(post));
  }
















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
    <postContext.Provider value={{ posts, deletePost, editPost, getPosts, addPosts }}>
      {props.children}
    </postContext.Provider>
  )
}


export default PostState;