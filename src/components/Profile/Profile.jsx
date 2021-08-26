import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>My Profile</div>
      <div className={s.ava}>
        <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"></img>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
