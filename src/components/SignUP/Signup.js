import "./Signup.css";
var React = require("react");
class Signup extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      sent: false,
      error: false,
    };
    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangeusername = this.handleChangeusername.bind(this);
    this.handleChangepass = this.handleChangepass.bind(this);
    this.handleChangeconfirmpass = this.handleChangeconfirmpass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeemail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeusername(event) {
    this.setState({ username: event.target.value });
  }
  handleChangepass(event) {
    this.setState({ password: event.target.value });
  }
  handleChangeconfirmpass(event) {
    this.setState({ confirmpassword: event.target.value });
  }
  handleSubmit(event) {
    console.log(this.state);
    //code backend
  }
  render() {
    return (
      <div>
        <div className="login-box">
          <h1>SignUP</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="textbox">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChangeusername}
              />
            </div>
            <div className="textbox">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="E-mail"
                value={this.state.email}
                onChange={this.handleChangeemail}
              />
            </div>
            <div className="textbox">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChangepass}
              />
            </div>
            <div className="textbox">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChangeconfirmpass}
                value={this.state.confirmpassword}
              />
            </div>

            <input type="submit" className="btn" value="Sign UP" />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
