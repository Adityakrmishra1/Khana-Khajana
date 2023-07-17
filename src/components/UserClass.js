import React from "react";
import { Link } from "react-router-dom";
import { PROFILE_IMAGE_URL } from "../../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
    };
  }
  render() {
    const { location, name } = this.props;
    return (
      <div className="user-container">
        <div className="user-card">
          <h2>{name}</h2>
          <h3>Location : {location} 🌍</h3>
          <p>
            Hello, I'm Aditya and I'm currently working as MTS (Member of
            Teachnincal Staff) at a fintech Firm.
          </p>
          <h4>
            Contact :{" "}
            <Link to="https://www.linkedin.com/in/aditya-kumar-mishra-62799b190/">
              @nopeace
            </Link>
          </h4>
        </div>
        <img className="user-img" src={PROFILE_IMAGE_URL} alt="profile" />
      </div>
    );
  }
  // render will return some piece of  JSX that will be displayed.
}

export default UserClass;
