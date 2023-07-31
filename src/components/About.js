import User from "./User";
import UserClass from "./UserClass";

const About = function () {
  return (
    <div className="about-container">
      <h1 className="text-center mt-2 font-bold text-2xl"> 😎 About Me.. 😎</h1>
      {/* <User /> */}
      <UserClass name={"Aditya Mishra"} location={"Gorakhpur, Uttar Pradesh"} />
    </div>
  );
};
export default About;
