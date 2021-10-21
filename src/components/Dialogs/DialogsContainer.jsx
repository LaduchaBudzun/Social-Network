import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";




const DialogsContainer = (props) => {
  debugger
  let state = props.store.getState()

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let onNewMessageChange = (body) => {

    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state.dialogsPage}/>
  );
};

export default DialogsContainer;
