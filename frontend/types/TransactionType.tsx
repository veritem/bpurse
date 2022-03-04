
export type TransactionType{
    id        :String,
    name      :String,
    amount    :Float,
    userId    :String,
    status    :TransactionStatus,
    createdAt :DateTime ,
    updatedAt :DateTime  ,       
    user      :UserType  ,    
    Budget    :BudgetType ,  
    budgetId  :String
}