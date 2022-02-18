import React, { useState } from "react"

const AddExpensesForm = ({ addExpenses }) => {
  const defaultInput = {
    mileage: "",
    communications: "",
    amenities: "",
    supplies: "",
    tolls: "",
    
  }

  const [newExpenses, setNewExpenses] = useState(defaultInput)

  const handleInput = (event) => {
    const { name, value } = event.currentTarget
    setNewExpenses({
      ...newExpenses,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const expensesData = {
      mileage: parseInt(newExpenses.mileage),
      communications: parseInt(newExpenses.communications),
      amenities: parseInt(newExpenses.amenities),
      supplies: parseInt(newExpenses.supplies),
      tolls: parseInt(newExpenses.tolls),
            
    }
    addExpenses(expensesData)
  }

  return (
    <div className="expenses-form">
      <form onSubmit={handleSubmit}>
        <label className="mileage">
          Total mileage driven:
          <input
            type="text"
            name="mileageText"
            onChange={handleInput}
            value={newExpenses.mileage}
          />
        </label>
        <label className="communications">
          Communications Expenses:
          <input
            type="text"
            name="communicationsText"
            onChange={handleInput}
            value={newExpenses.communications}
          />
        </label>
        <label className="amenities">
          Amenities Expenses:
          <input
            type="text"
            name="amenitiesText"
            onChange={handleInput}
            value={newExpenses.amenities}
          />
        </label>
        <label className="supplies">
          Supplies Expenses:
          <input
            type="text"
            name="suppliesText"
            onChange={handleInput}
            value={newExpenses.supplies}
          />
        </label>
        <label className="tolls">
          Tolls Paid While Working:
          <input
            type="text"
            name="tollsText"
            onChange={handleInput}
            value={newExpenses.tolls}
          />
        </label>
        
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddExpensesForm