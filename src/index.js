import "./components/navbar/navbar";
import "../main.scss";

import { renderNav } from "./components/navbar/navbar";
import { renderHome } from "./components/home/Home";
import { renderwrapper } from "./components/wrapper/wrapper";
const docFrag = new DocumentFragment();
const body = document.createElement("div");

body.setAttribute("id", "#root");
renderNav(docFrag);
renderHome(docFrag);
renderwrapper(docFrag)
document.body.appendChild(docFrag);
require("./scrollAnimation");
