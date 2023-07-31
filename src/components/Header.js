import { LOGO_URL, COMPANY_NAME } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = function () {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-slate-100 shadow-xl mb-2 mt-0 pt-0">
      <div className="flex flex-wrap-reverse justify-around">
        <img className="mt-0 absolutew-16 h-20 ml-2" src={LOGO_URL} />
        <h3 className="mt-10 mx-2">{COMPANY_NAME}</h3>
      </div>
      <div>
        <ul className="flex m-4 p-3 flex-wrap mx-3 font-normal">
          <li className="mx-3 p-2 hover:bg-cyan-100 rounded-xl">
            {onlineStatus ? "Online ✅" : "Offline 🟥"}
          </li>
          <li className="mx-5 p-2 hover:bg-cyan-100">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3 p-2 hover:bg-cyan-100">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-3 p-2 hover:bg-cyan-100">
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="mx-3 p-2 hover:bg-cyan-100"
            onClick={() => {
              // console.log(btnNameReact);
              btnNameReact == "Logout"
                ? setBtnNameReact("Login")
                : setBtnNameReact("Logout");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
