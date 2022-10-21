function css(e, styles) {
    for (const property in styles)
        e.style[property] = styles[property];
}



export function createForm(str) {
  const form = document.createElement("form");
  document.body.appendChild(form);
  css(form, { display: 'flex', 'flex-direction': 'column'});
  const formHolder = document.querySelector("form");
  const label = document.createElement("label");
  formHolder.appendChild(label);
  const labelText = document.createTextNode(str);
  label.appendChild(labelText);
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  formHolder.appendChild(input);
  css(form, { width: '30%'});
}


createForm("Full Name");