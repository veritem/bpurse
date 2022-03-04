

export type NotificationCategoryType{  
    id        :String ,
    userId    :String,
    notiferId :String,
    message   :String
    type     : NotificationCategoryType,
    createdAt :DateTime ,
    updatedAt : DateTime ,
    user      : UserType    
}

export default NotificationCategoryType;