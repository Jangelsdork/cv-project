import React, { Component } from "react";


class App extends Component {
  render() {
    return(
    <div>
      <FormItem inputValue="First Name:" />
      <FormItem inputValue="Last Name:" />
      </div>
    )
  }
}

class FormItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputData: {value: ''},
      cvInputs: [],
    }

  }
  render() {
    const { inputData, cvInputs } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="valueInput">{this.props.inputValue}</label> {/*how can I return a new label for each item? E.g name, dob, etc*/}
          <input type="text" />
          <button type="submit">Add</button>
        </form>
      </div>


    )
  }
}



export default App;
