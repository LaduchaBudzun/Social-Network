import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Message = (props) => {
  return <div className={s.message}>{props.text}</div>;
};

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={s.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Dialogs = () => {
  let dialogs = [
    { name: "Dimych", id: "1" },
    { name: "Sasha", id: "2" },
    { name: "Andrey", id: "3" },
    { name: "Victor", id: "4" },
  ];

  let dialogsItems = dialogs.map((d) => <Dialog name={d.name} id={d.id} />);

  let messages = [
    { text: "Hi" },
    { text: "Hello" },
    { text: "How are you?" },
    { text: "I'm fine ,and you?" },
  ];

  let messagesItems = messages.map((m) => <Message text={m.text} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs.items}>{dialogsItems}</div>

      <div className={s.messages}>{messagesItems}</div>
    </div>
  );
};

export default Dialogs;
