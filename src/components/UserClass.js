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
      <div className="flex m-20 p-10 justify-between border ">
        <div className="">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <h3 className="text-lg">Location : {location} 🌍</h3>
          <p className="text-lg">
            Hello, I'm Aditya and I'm currently working as MTS (Member of
            Teachnincal Staff) at a fintech Firm.
          </p>
          <h4>
            Contact :{" "}
            <Link className="text-lg font-semibold cursor-pointer" to="https://www.linkedin.com/in/aditya-kumar-mishra-62799b190/">
              @nopeace
            </Link>
          </h4>
        </div>
        <img className="w-40 rounded-xl" src={PROFILE_IMAGE_URL} alt="profile" />
      </div>
    );
  }
  // render will return some piece of  JSX that will be displayed.
}

export default UserClass;
