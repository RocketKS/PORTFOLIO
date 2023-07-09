import React from "react";
import {createRoot} from "react-dom/client";

const element = React.createElement("p", {}, "Hello World");
const root = document.querySelector("#react-root");
createRoot(root).render(element);