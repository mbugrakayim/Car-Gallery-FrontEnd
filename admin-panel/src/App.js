import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import LoginComponent from "./Components/LoginComponent";
import Sidebar from "./Components/Navi/Sidebar";
import Topbar from "./Components/Navi/Topbar";
import EmployeeList from "./Components/Employee/EmployeeList";
import Employee from "./Components/Employee/Employee";
import NewEmployee from "./Components/Employee/NewEmployee";
import AuthService from "./Services/AuthService";
import CreateCar from "./Components/Car/CreateCar";
import UploadImages from "./Components/deneme/UploadImages";
import CustomerList from "./Components/Customer/CustomerList";
import Customer from "./Components/Customer/Customer";
import NewCustomer from "./Components/Customer/NewCustomer";

function App() {
  const [showAdminBoard, setAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showEmpBoard, setShowEmpBoard] = useState(false);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setShowEmpBoard(user.roles.includes("ROLE_EMPLOYEE"));
      setAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setCurrentUser(AuthService.getCurrentUser());
    }
  }, []);
  const logout = () => {
    AuthService.logout();
    setShowEmpBoard(false);
    setAdminBoard(false);
    setCurrentUser(undefined);
  };
  return (
    <Router>
      <div>
        <Topbar />

        <div className="container">
          <Routes>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/newcar" element={<CreateCar />} />
            <Route path="/employees" element={<EmployeeList />} />

            <Route path="/employees/:id" element={<Employee />} />

            <Route path="/newEmployees" element={<NewEmployee />} />
            <Route path="/addcustomer/" element={<NewCustomer />} />
            <Route path="/customerlist/:id" element={<Customer/>} />
            <Route path="/customerlist/" element={<CustomerList />} />
            <Route path="/deneme" element={<UploadImages />} />
          </Routes>
        </div>

        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Mustafa
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/home"}>
                Home
              </Link>
            </li>
            {showEmpBoard && (
              <li className="nav-item">
                <Link to={"/employee"} className="nav-link">
                  Employee Board
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User Board
                </Link>
              </li>
            )}
          </div>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logout}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sing Up
                </Link>
              </li>
            </div>
          )}
        </nav> */}
        <div className="container mt-3">
          <Routes>
            <Route path={"/"} element={<LoginComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
