import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>My Profile</div>
      <div className={s.ava}>
        <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"></img>
      </div>
    </div>
  );
};

export default ProfileInfo;
