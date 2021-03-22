import React, { useEffect, useState } from "react";
import "./navigation.scss";
import Logo from "../logo/Logo";
import NavigationToggler from "./navigationToggler/NavigationToggler";
import NavigationItem from "./navigationItem/NavigationItem";
import { routes } from "constants/routes";

export default function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className={`main-nav ${isCollapsed ? "" : " inflated-main-nav"}`}>
      <ul>
        <Logo isCollapsed={isCollapsed} />
        <NavigationToggler collapser={setIsCollapsed} />
        {routes.map(({ path, name, icon }, key) => {
          return <NavigationItem key={key} path={path} name={name} icon={icon} />
        })}
      </ul>
    </nav>
  );
}