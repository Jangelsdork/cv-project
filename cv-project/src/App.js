import React, { Component } from "react";
import uniqid from "uniqid"
import Overview from "./components/Overview"

class App extends Component {
  render() {
    return(
    <div>
      <FormItem inputType="First Name:" />
      <FormItem inputType="Last Name:" />
      </div>
    )
  }
}

class FormItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputData: {
        inputValue: '',
        id: uniqid()
      },
      cvInputs: [],
      
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.onSubmitData = this.onSubmitData.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      inputData: {
        inputValue: e.target.value,
        id: this.state.inputData.id,
      }
    });
  };

  onSubmitData = (e) => {
    e.preventDefault();
    this.setState({
      cvInputs: this.state.cvInputs.concat(this.state.inputData),
      inputData: {
        inputValue: '',
        id: uniqid()
      }
    })

  }

  render() {
    const { inputData, cvInputs } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitData}>
          <label htmlFor="valueInput">{this.props.inputType}</label> {/*how can I return a new label for each item? E.g name, dob, etc*/}
          <input 
            onChange={this.handleChange}
            value={inputData.inputValue}
            type="text" 
            id="valueInput"
          />
          <button type="submit">Add</button>
        </form>
        <Overview cvInputs={cvInputs} />
      </div>


    )
  }
}



export default App;
