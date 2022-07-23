import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
// import Banner  from "./Components/TitleBanner";
import Notebook from "./Components/Notebook";
//Remember to study react-pageflip
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
      /* <p>Name: {this.state.data.name}</p>
        <p>LastName: {this.state.data.lastName}</p>
        <Banner /> */
    return (
      <ParallaxProvider>
      
        <Notebook />

        
      </ParallaxProvider>
    );
  }
}

export default App;
