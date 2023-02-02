import React from "react";
import loadingIcon from "../loadingicon.jpg";
import "../App.css";
import UserDetailsGitLab from "./UserDetailsGitLab";
import { Button } from './Button';

// Component that fetches the list of cars
class UsersGitLab extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      showComponent: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);

    this.state = {
      userData: [],
      isLoaded: false,
    };
  }

  // if the component is called then the fetch api is called
  componentDidMount() {
    fetch(`/api/gitlab-users/${this.props.username}`)
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
  }

  onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  //rendering the data from the api
  render() {
    const { isLoaded, userData } = this.state;

    if (!isLoaded)
      return <img src={loadingIcon} alt="Loading..." width="150px" />;

    return (
      <>
        <div className="userSearchResult">
        <Button onClick={this.onButtonClick}>GitLab user | Name: {userData[0].name}</Button>
        {this.state.showComponent ?
           <UserDetailsGitLab username={userData[0].username}/> :
           null
        }
        </div>
      </>
    );
  }
}

export default UsersGitLab;
