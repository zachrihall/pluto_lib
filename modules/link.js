export function link(text, href, aria, fontSize, name, container){
    const parentContainer = document.getElementById(container);
    const link = document.createElement('a');
    link.innerText = text;
    link.style.fontSize = `${fontSize}px`;
    link.href = href;
    link.classList.add(name);
    link.ariaLabel = aria;
    parentContainer.appendChild(link);
};