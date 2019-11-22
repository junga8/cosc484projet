import React from 'react';
import { Link } from 'react-router-dom';

class Start extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
            loggedin: false
        };
    }

    componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ loggedin: res.loggedin }))
      .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js)
    callBackendAPI = async () => {
      const response = await fetch('/api/isloggedin');
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };

  logout()
  {
    if (this.state.loggedin)
    {
      alert("This should log you out when the api endpoint is written");
    }
    else
    {
      alert("You are already logged out!");
    }
  }

    render() {
        return(
          <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Readit</h1>
          </header>
          <Link to="/login">
              <button className="login-butt"> Login </button>
          </Link>
          <Link to="/signup">
            <button className="signup-butt"> Signup </button>
          </Link>
          <button className="signup-butt" onClick={() => {this.logout()}}> Sign Out </button>
        </div>
        )
    }
}

export default Start;