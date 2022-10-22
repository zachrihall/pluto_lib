export function h1(text, container, name, color){
    const parentContainer = document.getElementById(container);
    const h1 = document.createElement('h1');
    h1.innerText = text;
    h1.classList.add(name);
    h1.style.color = color;
    parentContainer.appendChild(h1);
};




