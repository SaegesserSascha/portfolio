import { default as About } from "../pages/about/About";
import { default as Animations } from "../pages/animations/Animations";
import { default as Forms } from "../pages/forms/Forms";
import { default as Graphs } from "../pages/graphs/Graphs";
import { default as Impressum } from "../pages/impressum/Impressum";

export const routes = [
  {
    path: "/about",
    component: About,
    name: "About"
  },
  {
    path: "/animations",
    component: Animations,
    name: "Animations"
  },
  {
    path: "/forms",
    component: Forms,
    name: "Forms"
  },
  {
    path: "/graphs",
    component: Graphs,
    name: "Graphs"
  },
  {
    path: "/impressum",
    component: Impressum,
    name: "Impressum"
  }
];