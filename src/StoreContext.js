import React from "react";
import store from "./redux/redux-store";
import App from "./App";


const StoreContext = React.createContext(null)

export const Provider = (props) =>{
    debugger
    return <StoreContext.Provider value={props.value}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext