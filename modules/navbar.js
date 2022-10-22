export function navbar(obj, src, color, container) {
  const parentContainer = document.getElementById(container);
  let menu = document.createElement("div");
  menu.style.display = 'flex';
  menu.style.fontSize = '2em';
  menu.style.gap = '0.5em';
  menu.style.alignItems = 'center';
  menu.style.padding = '0.25em';
  menu.style.flexDirection = "row";
  menu.style.backgroundColor = color;
  menu.style.width = '100vw';

  const navImage = document.createElement('img');
  navImage.src = src;
  navImage.style.width = '2em';
  navImage.setAttribute("aria-label", 'navbar logo which links to the pluto hacks website');
  menu.appendChild(navImage);

  let ObjLength = Object.keys(obj).length;

  for (let i = 0; i < ObjLength; i++) {
    let box = document.createElement("div");
    box.setAttribute("id", `mybox${i}`);

    // box.style.backgroundColor = "lightblue";
    box.style.color = "black";
    // box.style.width = "150px";
    // box.style.height = "150px";
    box.style.flexDirection= "row";
    box.style.justifyContent="centered";

    let anchor = document.createElement("a");

    let aText = document.createTextNode(Object.values(obj)[i]);
    anchor.setAttribute("href", "https://www.plutohacks.com/");
    anchor.appendChild(aText);
    box.appendChild(anchor);
    // console.log(box.outerHTML);
    menu.appendChild(box);
  }
  parentContainer.appendChild(menu);
}
