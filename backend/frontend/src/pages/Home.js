import React from "react";
import "../App.css";
import UsersGitHub from "../components/UsersGitHub";
import UsersGitLab from "../components/UserGitLab";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", formSubmit: false };
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // Handles user's input by updating the word to what the user has typed
  handleInput(event) {
    this.setState({
      username: event.target.value,
    });
  }

  //  Handles the submission of the form by marking formSubmit as true
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ formSubmit: true });
  }

  // Renders the input field and the def and usage of a word if it has both once the form has been submitted
  render() {
    return (
      <>
        <div className="App">
          <div class="header">
            <h1>GitHub and GitLab users</h1>
          </div>
          <div class="form">
            <form onSubmit={this.handleFormSubmit}>
              <label>
                Search for a user:
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={this.handleInput}
                />
              </label>
            </form>
            <p>Hint --- Press enter once you have typed out your word</p>
          </div>
          {this.state.formSubmit && <UsersGitHub username={this.state.username} />}
          {this.state.formSubmit && <UsersGitLab username={this.state.username} />}
        </div>
      </>
    );
  }
}

export default Home;
