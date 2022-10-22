import { image } from "./Modules/image.js";
import { link } from "./Modules/link.js";
import { container } from "./Modules/container.js";
import { h1 } from "./Modules/h1.js";
import { form } from "./Modules/form.js";
import { h2 } from "./Modules/h2.js";
import { Navbar } from "./Modules/navbar.js";

container("zachs-container", "vertical");

h1("this is my title", "zachs-container", "my-title");
h2("this is my subtitle", "zachs-container", "my-sub-title");
link(
  "google",
  "https://www.google.com",
  "link to google",
  20,
  "my-link",
  "zachs-container"
);
image(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/640px-Soccerball.svg.png",
  50,
  "soccer-ball",
  "picture of a soccer ball",
  "zachs-container"
);
form(["Name", "Last Name", "Age"], "zachs-container");

let obj = { label1: "home", label2: "contact" };
Navbar(obj);
