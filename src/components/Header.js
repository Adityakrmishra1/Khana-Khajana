import { LOGO_URL } from "../../utils/constants";

const Header = function () {
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
				</ul>
			</div>

		</div>
	);
}

export default Header;