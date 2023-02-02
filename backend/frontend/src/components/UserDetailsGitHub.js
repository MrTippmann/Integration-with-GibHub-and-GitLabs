import React from "react";
import loadingIcon from "../loadingicon.jpg";
import "../App.css";

// Component that fetches the list of cars
class UserDetailsGitHub extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      isLoaded: false,
      repoItems: [],
    };
  }

  // if the component is called then the fetch api is called
  componentDidMount() {
    fetch(`/api/github-users/${this.props.username}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          userData: json,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`/api/github-users/${this.props.username}/repos`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          repoItems: json,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //rendering the data from the api
  render() {
    const { isLoaded, userData, repoItems } = this.state;

    if (!isLoaded)
      return <img src={loadingIcon} alt="Loading..." width="150px" />;

    return (
      <>
        <div className="userDetails">
          <div className="header">
            <h1>User details for {userData.name} (GitHub User)</h1>
            <img id="profilePic" src={userData.avatar_url} alt="Profile Pic" />
          </div>

          <ul>
            <li>Bio: {userData.bio}</li>
            <li>Email: {userData.email}</li>
            <li>company: {userData.company}</li>
            <li>Location: {userData.location}</li>
          </ul>

          <h2>Repo Details</h2>
          <ul>
          {repoItems.map((item) => (
            <li key={item.id}>
              Name: {item.name} | Description: {item.description} | Last Commit Date: {item.pushed_at} | Creation Date: {item.created_at}
            </li>
          ))}
        </ul>
        </div>
      </>
    );
  }
}

export default UserDetailsGitHub;
