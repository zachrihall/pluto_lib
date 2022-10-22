export function h3(text, container, name, color){
    const parentContainer = document.getElementById(container);
    const h3 = document.createElement('h3');
    h3.innerText = text;
    h3.classList.add(name);
    h3.style.color = color;
    parentContainer.appendChild(h3);
};