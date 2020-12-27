import "./Login.css";
import Signup from "../SignUP/Signup";
var React = require("react");
class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      login: "",
      pass: "",
      sent: false,
      error: false,
      register: false,
    };
    this.handleChangenom = this.handleChangenom.bind(this);
    this.handleChangepass = this.handleChangepass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.register = this.register.bind(this);
  }

  handleChangenom(event) {
    this.setState({ login: event.target.value });
  }
  handleChangepass(event) {
    this.setState({ pass: event.target.value });
  }
  handleSubmit(event) {
    //code back end
  }
  register(event) {
    this.setState({ register: true });
  }
  render() {
    if (this.state.register) {
      return <Signup></Signup>;
    } else {
      return (
        <div>
          <div className="login-box">
            <h1>Login</h1>
            <div className="textbox">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                onChange={this.handleChangenom}
                value={this.state.login}
              />
            </div>

            <div className="textbox">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                onChange={this.handleChangepass}
                value={this.state.pass}
              />
            </div>

            <input type="button" className="btn" value="Sign in" />
            <h3 className="signuptext">
              You don't have an account?
              <button onClick={this.register}>SignUP</button>
            </h3>
          </div>
        </div>
      );
    }
  }
}

export default Login;
