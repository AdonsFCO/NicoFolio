import React from "react";
// import Api from "./Components/Api";

// import { user } from "./contentManager";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: {} };
  }
  getData() {
    let server = "http://localhost:5000/api/user";
    // let data;
    fetch(server)
      .then((res) => res.json())
      .then((answ) => {
        this.setState((state) => ({ data: answ }));
      });
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <p>Name: {this.state.data.name}</p>
        <p>LastName: {this.state.data.lastName}</p>
      </>
    );
  }
}

export default App;
