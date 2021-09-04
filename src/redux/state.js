let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likes: 15 },
      { id: 2, message: "My name is Vladislav.", likes: 20 },
      { id: 3, message: "It's my first post!", likes: 20 },
    ],
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
  },
};

export let addPost = (postMessage) => {
  debugger;
  let newPost = {
    id: 4,
    message: postMessage,
    likes: 0,
  };

  state.profilePage.posts.push(newPost);
};

export default state;
