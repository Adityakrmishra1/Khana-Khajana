import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
const Header = function () {

	const [btnNameReact, setBtnNameReact] = useState("Login");
	console.log("header rendered");
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} />
			</div>
			<div className="nav-list">
				<ul>
					<li className="nav-item"> Home </li>
					<li className="nav-item"> About </li>
					<li className="nav-item"> Contact Us </li>
					<li className="nav-item"> Careers </li>
					<button className="btn-logout" onClick={() => {
						console.log(btnNameReact);
						btnNameReact == 'Logout' ?
							setBtnNameReact("Login") : setBtnNameReact('Logout');
					}}>{btnNameReact}</button>
				</ul>
			</div>

		</div>
	);
}

export default Header;