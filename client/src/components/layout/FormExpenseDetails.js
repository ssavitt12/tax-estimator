import React, { Component} from "react";


export class FormExpenseDetails extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values, handleChange } = this.props
    
    return ( 
      <div className="expenses-form">
        <h2>Add your work-related expenses</h2>
        <h5>Mark 0 if not applicable</h5>
        <div className="form-data">
        <form>
          <label className="mileage">
            Total mileage driven:
            <input
              type="text"
              name="mileage"
              onChange={handleChange('mileage')}
              defaultValue={values.mileage}
            />
          </label>
          <label className="communications">
            Communications Expenses:
            <input
              type="text"
              name="communications"
              onChange={handleChange('communications')}
              defaultValue={values.communications}
          />
          </label>
          <label className="amenities">
            Amenities Expenses:
            <input
              type="text"
              name="amenities"
              onChange={handleChange('amenities')}
              defaultValue={values.amenities}
            />
          </label>
          <label className="supplies">
            Supplies Expenses:
            <input
              type="text"
              name="supplies"
              onChange={handleChange('supplies')}
              defaultValue={values.supplies}
          />
          </label>
          <label className="tolls">
            Tolls Paid While Working:
            <input 
              type="text" 
              name="tolls" 
              onChange={handleChange('tolls')}
              defaultValue={values.tolls}
            />
          </label>
          <input className="button" type="button" value="Continue" onClick={this.continue} />
        </form>
        </div>
    </div>
    )
  }
}



export default FormExpenseDetails