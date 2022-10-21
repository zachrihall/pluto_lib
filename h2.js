export function h2(text, container, name){
    const parentContainer = document.getElementById(container);
    const h2 = document.createElement('h2');
    h2.innerText = text;
    h2.classList.add(name);
    parentContainer.appendChild(h2);
};