import { NavLink } from "react-router-dom";

//import RegistrationType from "./RegistrationType"

const Aside = () => {
  return (
    <div className="">
      <h3 className="aside__title">STEPS</h3>
      <ul>
        <li>
          <div className="aside__link">
            <NavLink
              NavLink
              exact
              to="/RegistrationForm"
              className="aside__link--text "
            >
              Registration Type
            </NavLink>
          </div>
        </li>

        <li>
          <div className="aside__link">
            <NavLink
              exact
              to="/RegistrationForm/qestion"
              className="aside__link--text "
            >
              Questions
            </NavLink>
          </div>
        </li>
        <li>
          <div className="aside__link">
            <NavLink
              exact
              to="/RegistrationForm/summary"
              className="aside__link--text "
            >
              Summary
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Aside;
