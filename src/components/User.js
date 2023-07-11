import { Link } from "react-router-dom";
import { PROFILE_IMAGE_URL } from "../../utils/constants";

const User = () => {
  return (
    <div className="user-container">
      <div className="user-card">
        <h2>Aditya Mishra</h2>
        <h3>Location : Gorakhpur 🌍</h3>
        <p>
          Hi, I'm Aditya and I'm currently working as MTS (Member of Teachnincal
          Staff) at a fintech Firm. It's nice meeting you.
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
};

export default User;
