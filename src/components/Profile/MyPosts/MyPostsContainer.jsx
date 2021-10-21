import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
    debugger
    let state = props.store.getState()

  let newPostElement = React.createRef();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());// изменение в state

  };

  let onPostChange= (text) =>{
      let action = updateNewPostTextActionCreator(text)
      props.store.dispatch(action)
  }
  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
  );
};

export default MyPostsContainer;
