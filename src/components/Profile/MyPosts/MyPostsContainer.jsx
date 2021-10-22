import React from "react";
import s from "./MyPosts.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
//скобки обязанны быть на новой строке
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    debugger
                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());// изменение в state
                    };

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text)
                        store.dispatch(action)
                    }
                    return (
                        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}/>
                    )
                }

            }

        </StoreContext.Consumer>)
};

export default MyPostsContainer;
