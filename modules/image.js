export function image(src, width, name, aria, container) {
    const parentContainer = document.getElementById(container);
    const img = document.createElement('img');
    img.style.width = `${width}em`;
    img.src = src;
    img.classList.add(name);
    img.ariaLabel = aria;
    parentContainer.appendChild(img);
}
