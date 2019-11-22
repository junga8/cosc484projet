import React from 'react';
import { Link } from 'react-router-dom';

class Confirm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
            loggedin: false
        };
    }

    async componentDidMount() {
      // Call our fetch function below once the component mounts
    await this.callBackendAPI()
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

  checkLoginStatus()
  {
    if (this.state.loggedin)
    {
      return (
          <div>
              <h1> Login Successful! </h1>
          </div>
      )
    }
    else
    {
      return (
          <div>
              <h1> Login Failed. . .</h1>
                <Link to="/login">
                    <button className="login-butt"> Try Login Again </button>
                </Link>
          </div>
      )
    }
  }
  
    render() {
        
        return(
          this.checkLoginStatus()
        )
    }
}

export default Confirm;