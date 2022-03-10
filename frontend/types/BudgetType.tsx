import UserType  from "./UserType"

export type BudgetType {
    id:String ,
    name:String,
    description:String,
    userId:String,
    status : BudgetStatus ,
    createdAt :  DateTime,
    updatedAt : DateTime ,
    user      : UserType,
    items    :     Item[]
    transactions : Transaction[]
  }

export default BudgetType;