import ResturantsContainer from "./ResturantsContainer";
import Search from "./Search";

let Body = function () {
	return (
		<div className="body">
			<Search />
			<ResturantsContainer />
		</div>
	);
}

export default Body;