import React, { Component } from 'react'

class ColorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorName: '',
      hexValue: '#000000'
    }
  }

  handleNameChange = (evt) => {
    evt.preventDefault()
    let newColorName = evt.target.value
    this.setState({colorName: newColorName})
  }

  handleColorChange = (evt) => {
    evt.preventDefault()
    let newHexValue = evt.target.value
    console.log(newHexValue)
    this.setState({hexValue: newHexValue})
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.addColor(this.state.colorName, this.state.hexValue)
    this.setState({ colorName: '', hexValue: '#000000'})
  }

  render () {
    return (
      <form className="border rounded p-4" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Color Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            onChange={this.handleNameChange}
            value={this.state.colorName}/>
        </div>
        <div className="form-group">
          <label htmlFor="color">Color Value</label>
          <input
            type="color"
            className="form-control"
            name="color"
            id="color"
            onChange={this.handleColorChange}
            value={this.state.hexValue}/>
        </div>
        <span hidden={this.state.colorName.length>=3} style={{ visibility: 'hidden', color: 'red' }}>Color name must be 3 or more characters.</span>
        <button type="submit" className="btn btn-dark text-light" disabled={this.state.colorName.length<3}>Submit</button>
      </form>
    )
  }
}

export default ColorForm
