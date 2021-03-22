import React, { useEffect, useState } from "react";
import "./navigation.scss";
import NavigationToggler from "./navigationToggler/NavigationToggler";
import NavigationItem from "./navigationItem/NavigationItem";
import { routes } from "constants/routes";

export default function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    // TODO Change Navigation width and flex-direction based on isCollapsed state
  }, [isCollapsed]);

  return (
    <nav className={`main-nav ${isCollapsed ? "" : " inflated-main-nav"}`}>
      <ul>
        <NavigationToggler collapser={setIsCollapsed} />
        {routes.map(({ path, name, icon }, key) => {
          return <NavigationItem key={key} path={path} name={name} icon={icon} />
        })}
      </ul>
    </nav>
  );
}