// resources/js/app.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "../css/app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
// custom css
// import "../../public/assets/css/style.css";

// vendor css
// import "../../public/assets/vendor/aos/aos.css";
// import "../../public/assets/vendor/bootstrap/css/bootstrap.min.css";
// import "../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
// import "../../public/assets/vendor/glightbox/css/glightbox.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
