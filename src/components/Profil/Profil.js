import "./profil.css";
var React = require("react");
class Profil extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Phone: "",
      email: "",
      password: "",
      confirmpassword: "",
      sent: false,
      error: false,
      data: null,
      loading: false,
    };
    this.handleChangenom = this.handleChangenom.bind(this);
    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangepass = this.handleChangepass.bind(this);
    this.handleChangeconfirmpass = this.handleChangeconfirmpass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }
  handleChangenom(event) {
    this.setState({ login: event.target.value });
  }
  handleChangeemail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangePhone(event) {
    this.setState({ Phone: event.target.value });
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
          <h1>Profil</h1>
          <form onSubmit={this.handleSubmit}>
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
              <i className="fas fa-phone"></i>
              <input
                type="text"
                placeholder="Add Your Phone Number"
                value={this.state.Phone}
                onChange={this.handleChangePhone}
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
            <div className="textbox">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChangeconfirmpass}
                value={this.state.confirmpassword}
              />
            </div>

            <input type="submit" className="btn" value="Update Profil" />
          </form>
        </div>
      </div>
    );
  }
}

export default Profil;
