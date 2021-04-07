import { Route } from "react-router";
import "./content.scss";
import { routes } from "constants/routes";

export default function Content() {
  return (
    <div className="content-wrapper">
      <div className="content" id="content">
        {routes.map(({ path, component }, key) => {
          return <Route key={key} path={path} component={component} />
        })}
      </div>
    </div>
  );
}