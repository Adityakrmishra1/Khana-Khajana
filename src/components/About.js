import User from "./User";
import UserClass from "./UserClass";

const About = function () {
  return (
    <div className="about-container">
      <h1> 😎 About Me.. 😎</h1>
      <User />
      <UserClass name={"Aditya Mishra"} location={"Gorakhpur, Uttar Pradesh"} />
    </div>
  );
};
export default About;
