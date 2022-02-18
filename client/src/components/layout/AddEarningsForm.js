import React, { useState } from "react"

const AddEarningsForm = ({ addEarnings }) => {
  const defaultInput = {
    uber: "",
    lyft: "",
    ubereats: "",
    doordash: "",
    grubhub: "",
    instacart: "",
    other: ""
  }

  const [newEarnings, setNewEarnings] = useState(defaultInput)

  const handleInput = (event) => {
    const { name, value } = event.currentTarget
    setNewEarnings({
      ...newEarnings,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const earningsData = {
      uber: parseInt(newEarnings.uber),
      lyft: parseInt(newEarnings.lyft),
      ubereats: parseInt(newEarnings.ubereats),
      doordash: parseInt(newEarnings.doordash),
      grubhub: parseInt(newEarnings.grubhub),
      instacart: parseInt(newEarnings.instacart),
      other: parseInt(newEarnings.other)
      
    }
    addEarnings(earningsData)
  }

  return (
    <div className="earnings-form">
      <form onSubmit={handleSubmit}>
        <label className="uber">
          Earnings from Uber:
          <input
            type="text"
            name="uberText"
            onChange={handleInput}
            value={newEarnings.uber}
          />
        </label>
        <label className="uber">
          Earnings from Uber:
          <input
            type="text"
            name="uberText"
            onChange={handleInput}
            value={newEarnings.uber}
          />
        </label>
        <label className="lyft">
          Earnings from Lyft:
          <input
            type="text"
            name="lyftText"
            onChange={handleInput}
            value={newEarnings.lyft}
          />
        </label>
        <label className="ubereats">
          Earnings from UberEats:
          <input
            type="text"
            name="uberEatsText"
            onChange={handleInput}
            value={newEarnings.ubereats}
          />
        </label>
        <label className="doordash">
          Earnings from Doordash:
          <input
            type="text"
            name="doordashText"
            onChange={handleInput}
            value={newEarnings.doordash}
          />
        </label>
        <label className="grubhub">
          Earnings from Grubhub:
          <input
            type="text"
            name="grubhubText"
            onChange={handleInput}
            value={newEarnings.grubhub}
          />
        </label>
        <label className="instacart">
          Earnings from Instacart:
          <input
            type="text"
            name="instacartText"
            onChange={handleInput}
            value={newEarnings.instacart}
          />
        </label>
        <label className="other">
          Earnings from Other Apps:
          <input
            type="text"
            name="otherText"
            onChange={handleInput}
            value={newEarnings.other}
          />
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddEarningsForm