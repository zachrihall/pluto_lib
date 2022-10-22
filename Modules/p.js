export function p(text, container, name){
    const parentContainer = document.getElementById(container);
    const p = document.createElement('p');
    p.innerText = text;
    p.classList.add(name);
    parentContainer.appendChild(p);
};