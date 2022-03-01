// import react from "react";
import { NavData } from "./NavData";
import { useNavigate } from "react-router-dom";
import "../static/css/nav.css";

const Nav = ({}) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          {NavData.map((item, index) => {
            return (
              <li
                onClick={() => item.onClick(navigate)}
                key={index}
                className={item.cName}
              >
                <div className="navIcon" >{item.icon}</div>
                {/* <img className="navIcon" src={item.icon} /> */}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
