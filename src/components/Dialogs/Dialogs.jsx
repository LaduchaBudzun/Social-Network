import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";




const Dialogs = (props) => {
  let state = props.dialogsPage

  let dialogsItems = state.dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));

  let messagesItems = state.messages.map((m) => (
    <Message text={m.text} />
  ));

  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = () => {
    let body = newMessageElement.current.value;
    props.updateNewMessageBody(body)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs.items}>{dialogsItems}</div>

      <div className={s.blockOfMessages}>
        <div className={s.messages}>{messagesItems}</div>
        <div className={s.newMessageAdd}>
          <textarea onChange={onNewMessageChange} ref={newMessageElement} value={state.newMessage}></textarea>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
