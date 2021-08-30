import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { message: "Hi, how are you?", likes: 15 },
    { message: "My name is Vladislav.", likes: 20 },
    { message: "It's my first post!", likes: 20 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  debugger;
  console.log(posts[0].message);

  return (
    <div className={s.myPosts}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div className={s.btnAddPost}>
        <button>Add post</button>
      </div>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
