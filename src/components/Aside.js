import { NavLink } from "react-router-dom"

const Aside = () => {
  return (
    <div>
        
      <h3 className="aside__title">STEPS</h3>
      <ul>
        <li className="aside__link">
          <NavLink exact to="/">Registration Type</NavLink>{" "}
        </li>
        <li className="aside__link">
          <NavLink exact to="/">Questions</NavLink>{" "}
        </li>
        <li className="aside__link">
          <NavLink exact to="/">Summary</NavLink>{" "}
        </li>
      </ul>
    </div>
  );
};
export default Aside;
