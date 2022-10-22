export function h2(text, container, name, color){
    const parentContainer = document.getElementById(container);
    const h2 = document.createElement('h2');
    h2.innerText = text;
    h2.classList.add(name);
    h2.style.color = color;
    parentContainer.appendChild(h2);
};