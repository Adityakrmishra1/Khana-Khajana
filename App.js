import react from "react";
import ReactDOM from "react-dom/client";

// getting Components...
import Header from "./src/components/Header";
import Body from "./src/components/Body";

let AppLayoutContainer = function () {
  return (
    <div className="appContainer">
      <Header />
      <Body />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutContainer />);
