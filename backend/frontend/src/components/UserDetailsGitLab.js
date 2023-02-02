import React from "react";
import loadingIcon from "../loadingicon.jpg";
import "../App.css";

// Component that fetches the list of cars
class UserDetailsGitLab extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      isLoaded: false,
      ProjectItems: [],
    };
  }

  // if the component is called then the fetch api is called
  componentDidMount() {
    fetch(`/api/gitlab-users/${this.props.username}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          userData: json,
          isLoaded: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`/api/gitlab-users/${this.props.username}/projects`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          ProjectItems: json,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //rendering the data from the api
  render() {
    const { isLoaded, userData, ProjectItems } = this.state;

    if (!isLoaded)
      return <img src={loadingIcon} alt="Loading..." width="150px" />;

    return (
      <>
        <div className="userDetails">
          <div className="header">
            <h1>User details for {userData[0].name} (GitLab User)</h1>
            <img
              id="profilePic"
              src={userData[0].avatar_url}
              alt="Profile Pic"
            />
          </div>

          <ul>
            <li>Unable to fetch user personal information</li>
            <li>
              <form action={userData[0].web_url}>
                <input type="submit" value="Go to GitLab Profile" />
              </form>
            </li>
          </ul>

          <h2>Repo Details</h2>
          <ul>
            {ProjectItems.map((item) => (
              <li key={item.id}>
                Name: {item.name} | Description: {item.description} | Last
                Commit Date: {item.last_activity_at} | Creation Date:
                {item.created_at}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default UserDetailsGitLab;
