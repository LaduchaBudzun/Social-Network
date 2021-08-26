import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <textarea></textarea>
      <button>Add post</button>

      <div className={s.posts}>
        <Post message="Hi, how are you?" likes="15" />
        <Post message="It's my first post!" likes="20" />
        {/* каждый раз вызывается функция Post и туда передаются параметры message */}
      </div>
    </div>
  );
};

export default MyPosts;
