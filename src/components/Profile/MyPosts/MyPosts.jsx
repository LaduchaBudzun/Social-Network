import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {



  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());// изменение в state

  };

  let onPostChange= () =>{
      let text = newPostElement.current.value;
      props.dispatch(updateNewPostTextActionCreator(text))
  }
  return (
    <div className={s.myPosts}>
      <h3>My Posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
      </div>
      <div className={s.btnAddPost}>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
