import React, { Component } from "react";
import Procesadores from "./components/procesors";

class App extends Component {
  constructor() {
    super();
    this.state = {
      procesors: []
    };
  }

  componentDidMount() {
    fetch(
      "https://odata.intel.com/API/v1_0/Products/Processors()?$top=50&$format=json"
    )
      .then(response => response.json())
      .then(data => this.setState({ procesors: data }))
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return <Procesadores procesors={this.state.procesors} />;
  }
}

export default App;
