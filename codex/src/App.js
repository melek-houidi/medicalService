import React from "react";
import Login from "./component/Login";
import Register from "./component/Register";
import style from "./component/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="Login">
          <Login />
        </div>

        <div className="Register">
          <Register />
        </div>
      </div>
    );
  }
}

export default App;
