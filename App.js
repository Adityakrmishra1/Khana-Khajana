import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// getting Components...
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import About from "./src/components/About";
import Error from "./src/components/Error";
import ContactUs from "./src/components/ContactUs";
import RestaurantMenu from "./src/components/RestaurantMenu";

let AppLayoutContainer = function () {
  return (
    <div className="appContainer">
      <Header />
      <Outlet />
    </div>
  );
};

// lazy loading
// onDemand Loading
// code splitting dynaimc bundling

const About = lazy(() => import("./src/components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
