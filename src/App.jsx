import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   setIsLoggedIn(token);
  // }, []);

  return (
    <Router>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      {/* <Route
        exact
        path="start"
        element={loggedIn ? <Start /> : <Navigate replace to={"/"} />}
      />
      Basic */}

      <Routes>
        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          exact
          path="/"
          element={isLoggedIn ? <Main /> : <Navigate replace to={"/login"} />}
        />

        <Route
          exact
          path="/cart"
          element={isLoggedIn ? <Cart /> : <Navigate replace to={"/login"} />}
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </Router>
  );
}

export default App;
