import { default as About } from "../pages/about/About";
import { default as Animations } from "../pages/animations/Animations";
import { default as Forms } from "../pages/forms/Forms";
import { default as Graphs } from "../pages/graphs/Graphs";
import { default as Impressum } from "../pages/impressum/Impressum";
import { BsPersonFill } from "react-icons/bs";
import { RiMovieLine } from "react-icons/ri";
import { AiOutlineForm } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { VscQuestion } from "react-icons/vsc";

export const routes = [
  {
    path: "/about",
    component: About,
    name: "About Me",
    icon: <BsPersonFill size={28} />
  },
  {
    path: "/animations",
    component: Animations,
    name: "Animations",
    icon: <RiMovieLine size={28} />
  },
  {
    path: "/forms",
    component: Forms,
    name: "Forms",
    icon: <AiOutlineForm size={28} />
  },
  {
    path: "/graphs",
    component: Graphs,
    name: "Graphs",
    icon: <GoGraph size={28} />
  },
  {
    path: "/impressum",
    component: Impressum,
    name: "Impressum",
    icon: <VscQuestion size={28} />
  }
];