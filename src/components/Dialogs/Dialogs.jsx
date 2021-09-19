import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/state";




const Dialogs = (props) => {

  let dialogsItems = props.state.dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));

  let messagesItems = props.state.messages.map((m) => (
    <Message text={m.text} />
  ));

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(onMessageChangeActionCreator(text))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs.items}>{dialogsItems}</div>

      <div className={s.blockOfMessages}>
        <div className={s.messages}>{messagesItems}</div>
        <div className={s.newMessageAdd}>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessage}></textarea>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
