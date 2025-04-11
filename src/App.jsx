import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      {localStorage.getItem("token") && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            localStorage.getItem("token") ? <Main /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/cart"
          element={
            localStorage.getItem("token") ? <Cart /> : <Navigate to="/login" />
          }
        />

        <Route
          path="*"
          element={
            <Navigate to={localStorage.getItem("token") ? "/" : "/login"} />
          }
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
