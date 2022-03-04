
export type ItemType {
    id          :String ,
    name        :String,
    description :String,
    source      :String,
    budgetId    :String,
    amount      :Float,
    createdAt   :DateTime,
    updatedAt   :DateTime,
    budget     : BudgetType
  }

  export default ItemType;