export function h3(text, container, name){
    const parentContainer = document.getElementById(container);
    const h3 = document.createElement('h3');
    h3.innerText = text;
    h3.classList.add(name);
    parentContainer.appendChild(h3);
};