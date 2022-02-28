import React, { Component} from "react";

export class FormEarningDetails extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props
  
    return (
      <div className="earnings-form">
        <h2>Add your earnings</h2>
        <h5>Mark 0 if not Applicable</h5>
        <div className="form-data">
        <form>
          <label className="uber">
            Earnings from Uber:
            <input
              type="text"
              name="uber"
              onChange={handleChange('uber')}
              defaultValue={values.uber}
            />
          </label>
          <label className="lyft">
            Earnings from Lyft:
            <input
              type="text"
              name="lyft"
              onChange={handleChange('lyft')}
              defaultValue={values.lyft}
            />
          </label>
          <label className="ubereats">
            Earnings from UberEats:
            <input
              type="text"
              name="ubereats"
              onChange={handleChange('ubereats')}
              defaultValue={values.ubereats}
            />
          </label>
          <label className="doordash">
            Earnings from Doordash:
            <input
              type="text"
              name="doordash"
              onChange={handleChange('doordash')}
              defaultValue={values.doordash}
            />
          </label>
          <label className="grubhub">
            Earnings from Grubhub:
            <input
              type="text"
              name="grubhub"
              onChange={handleChange('grubhub')}
              defaultValue={values.grubhub}
            />
          </label>
          <label className="instacart">
            Earnings from Instacart:
            <input
              type="text"
              name="instacart"
              onChange={handleChange('instacart')}
              defaultValue={values.instacart}
            />
          </label>
          <label className="other">
            Earnings from Other Apps:
            <input
              type="text"
              name="other"
              onChange={handleChange('other')}
              defaultValue={values.other}
            />
          </label>
          <input className="button" type="button" value="Back " onClick={this.back} />
          <input className="button" type="button" value="Continue " onClick={this.continue} />
        </form>
        </div>
      </div>
    )
  }
}

export default FormEarningDetails