const SEND_MESSAGE = 'SEND-MESSAGE'
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE'

const dialogsReducer = (state,action) =>{
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                text: state.newMessage,
            }
            state.messages.push(newMessage);
            state.newMessage = ''
            return state;
        case ON_MESSAGE_CHANGE:
            state.newMessage = action.newTextMessage;
            return state;
        default :
            return state
    }

}

export const sendMessageActionCreator= () =>{
    return{
        type:SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator= (text) =>{
    return{
        type:ON_MESSAGE_CHANGE,
        newTextMessage:text
    }
}


export default dialogsReducer