
export type MessageType{
    id        :String  ,
    userId    :String  ,
    replyId   :String ,
    message   :String,
    createdAt :DateTime ,
    updatedAt :DateTime ,
    user      :UserType   
}

export default MessageType