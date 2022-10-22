export function Navbar(obj) {
  let menu = document.createElement("div");
  menu.style.flexDirection = "row";

  let ObjLength = Object.keys(obj).length;

  for (let i = 0; i < ObjLength; i++) {
    let box = document.createElement("div");
    box.setAttribute("id", `mybox${i}`);

    box.style.backgroundColor = "lightblue";
    box.style.color = "black";
    box.style.width = "150px";
    box.style.height = "150px";
    box.style.flexDirection= "row";
    box.style.justifyContent="centered";

    let anchor = document.createElement("a");

    let aText = document.createTextNode(Object.values(obj)[i]);
    anchor.setAttribute("href", "#");
    anchor.appendChild(aText);
    box.appendChild(anchor);
    // console.log(box.outerHTML);
    menu.appendChild(box);
  }
  document.body.appendChild(menu);
}
