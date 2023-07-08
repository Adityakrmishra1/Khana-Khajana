import { useRouteError } from "react-router-dom";

const Error = function () {
  let error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Ooops ....</h1>
      <h2>Something went wrong .....</h2>
      <h3>{error.status}</h3>
      <h3>{error.statusText}</h3>
    </div>
  );
};

export default Error;
