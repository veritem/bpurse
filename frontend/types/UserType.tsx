
export  type UserType{
    id:String        
    email:String        
    name:String
    type:Role         
    password:String
    budgets:Budget[]
    Transaction:Transaction[]
    Notification:Notification[]
    Message:Message[]
}
export default UserType;