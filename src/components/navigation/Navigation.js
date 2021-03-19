import React from "react";
import "./navigation.scss";
import NavigationToggler from "./navigationToggler/NavigationToggler";
import NavigationItem from "./navigationItem/NavigationItem";
import { routes } from "constants/routes";
import { Route } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav className="main-nav">
        <ul>
          <NavigationToggler />
          {routes.map(({ path, name, icon }, key) => {
            return <NavigationItem key={key} path={path} name={name} icon={icon} />
          })}
        </ul>
      </nav>
      {routes.map(({ path, component }, key) => {
        return <Route key={key} path={path} component={component} />
      })}
    </div>
  );
}