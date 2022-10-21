function css(e, styles) {
  for (const property in styles) e.style[property] = styles[property];
}

export function createForm(labelNames, container) {

  const parentContainer = document.getElementById(container);
  const form = document.createElement("form");
  document.body.appendChild(form);
  css(form, { display: "flex", "flex-direction": "column" });
  labelNames.forEach((labelName) => {
    const formHolder = document.querySelector("form");

    const label = document.createElement("label");
    formHolder.appendChild(label);
    const labelText = document.createTextNode(labelName);
    label.appendChild(labelText);
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    formHolder.appendChild(input);
    css(input, { width: "30%" });
  });
  const button = document.createElement("button");
  css(button, {
    width: "20%",
    margin: "1rem",
    "background-color": "AliceBlue",
  });
  button.innerText = "Submit";

  form.appendChild(button);
  parentContainer.appendChild(form);
}

// createForm(["Name", "Last Name"]);
