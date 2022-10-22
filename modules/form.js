function css(e, styles) {
  for (const property in styles) e.style[property] = styles[property];
}

export function form(labelNames, container) {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.form);
  }

  const parentContainer = document.getElementById(container);
  const form = document.createElement("form");
  form.style.fontSize = '1.5rem';
  form.style.width = '20em';

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
  button.onclick = (e) => {submitHandler(e)};

  css(button, {
    width: "20%",
    margin: "1rem",
    "background-color": "AliceBlue",
  });
  button.innerText = "Submit";

  form.appendChild(button);
  parentContainer.appendChild(form);
}

