import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  debugger;
  let newPostElement = React.createRef();

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  let addPost = () => {
    debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
  };
  return (
    <div className={s.myPosts}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div className={s.btnAddPost}>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
