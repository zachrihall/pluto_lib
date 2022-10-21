export function createForm(str) {
  const form = document.createElement("form");
  document.body.appendChild(form);
  const formHolder = document.querySelector("form");
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  formHolder.appendChild(input);
}


createForm("me");