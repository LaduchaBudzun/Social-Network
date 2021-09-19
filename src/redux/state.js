const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE'
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
    if(action.type === ADD_POST){
      debugger
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likes: 0,
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state);
    }else if(action.type === UPDATE_NEW_POST_TEXT){
      debugger
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);// переотрисовка
    }else if(action.type === SEND_MESSAGE){
      let newMessage = {
        text: this._state.dialogsPage.newMessage,
      }

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessage = ''
      this._callSubscriber(this._state);
    }else if(action.type === ON_MESSAGE_CHANGE){
      this._state.dialogsPage.newMessage = action.newTextMessage;
      this._callSubscriber(this._state);
    }


  }

}




export const addPostActionCreator= () =>{
  return {
    type: ADD_POST
  }
}
export const updateNewPostTextActionCreator = (text) =>{
  return{
    type:UPDATE_NEW_POST_TEXT,newText:text
  }
}


export const sendMessageActionCreator= () =>{
  return{
    type:SEND_MESSAGE
  }
}
export const onMessageChangeActionCreator= (text) =>{
  return{
    type:ON_MESSAGE_CHANGE,
    newTextMessage:text
  }
}







export default store;
