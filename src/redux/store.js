import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
  _state : {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likes: 15 },
        { id: 2, message: "My name is Vladislav.", likes: 20 },
        { id: 3, message: "It's my first post!", likes: 20 },
      ],
      newPostText: 'way of Samurai',
    },
    dialogsPage: {
      dialogs: [
        { name: "Dimych", id: "1" },
        { name: "Sasha", id: "2" },
        { name: "Andrey", id: "3" },
        { name: "Victor", id: "4" },
      ],
      messages: [
        { text: "Hi" },
        { text: "Hello" },
        { text: "How are you?" },
        { text: "I'm fine ,and you?" },
      ],
      newMessage: 'Hello'
    },
  },
  _callSubscriber () {

  },
  getState(){
  return this._state
},
  subscribe (observer) {
    this._callSubscriber = observer
  },


  dispatch(action) {

    this._state.profilePage =  profileReducer(this._state.profilePage,action)
    this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage,action)



    this._callSubscriber(this._state);
  }

}














export default store;
