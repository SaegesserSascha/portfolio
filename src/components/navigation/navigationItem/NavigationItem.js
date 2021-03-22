import React from "react";
import { NavLink } from "react-router-dom";
import "../navigation.scss";

export default function NavigationItem({ path, name, icon }) {
  return (
    <li>
      <NavLink
        to={path}
        activeClassName="selected"
      >
        <div className="main-nav-icon">{icon}</div>
        <p>{name}</p>
      </NavLink>
    </li>
  );
}