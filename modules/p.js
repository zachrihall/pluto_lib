export function p(text, container, name, color){
    const parentContainer = document.getElementById(container);
    const p = document.createElement('p');
    p.innerText = text;
    p.classList.add(name);
    p.style.color = color;
    parentContainer.appendChild(p);
};