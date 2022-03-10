// import react from "react";
import { NavData } from "./NavData";
import { useNavigate } from "react-router-dom";

import "../static/css/nav.css";

const Nav = ({}) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <nav>
        <a className="logo" href="/"  ></a>
        <ul className="nav-links">
          {NavData.map((item, index) => {
            return (
              <li
                onClick={() => item.onClick(navigate)}
                key={index}
                className={item.cName}
              >
                <div className="nav-icon" >{item.icon}</div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
