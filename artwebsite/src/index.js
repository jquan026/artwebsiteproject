// import React from "react";
// import ReactDOM from "react-dom/client"; 
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router>
//     <App />
//   </Router>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import App from "./App";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
};

const RootComponent = () => {
  return (
    <Router>
      <ScrollToTop /> 
      <App />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);
