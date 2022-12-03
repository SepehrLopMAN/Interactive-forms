import "./App.css";
import SignUpForm from "./components/Forms/signUpForm";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  NavLink,
} from "react-router-dom";
import React from "react";
import LoginForm from "./components/Forms/LoginForm";
import ResetPasswordForm from "./components/Forms/ResetPasswordForm";
import inputStyles from "./components/InputField/inputField.module.css";

const NavBar = () => (
  <div className="navbar">
    <div className="navbar__side_menu_icon">
      {[...Array(3)].map((val, ind) => (
        <span className="navbar__circle" key={ind}></span>
      ))}
    </div>
    <nav className="navbar__menu">
      <ul>
        <li>
          <NavLink to="/signup">Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/reset_password">Forgot password</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />

          <Route
            path="/signup"
            element={
              <React.Fragment>
                <SignUpForm>
                  <div className={inputStyles["form-control"]}>
                    <label className={inputStyles["form-control__label"]}>
                      Age
                      <br />
                      <br />
                      <select
                        required
                        defaultValue=""
                        className={inputStyles["form-control__input"]}
                        style={{ width: 100 + "%" }}
                      >
                        <option disabled value="">
                          Select
                        </option>
                        {[...Array(28).keys()].map((val, ind) => (
                          <option value={val + 18} key={ind}>
                            {val + 18}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </SignUpForm>
              </React.Fragment>
            }
          />
          <Route path="/reset_password" element={<ResetPasswordForm />} />
          <Route path="*" element={<Navigate to="/signup" replace={true} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
