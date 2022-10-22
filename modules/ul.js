export function ul(items, color, font, container){
    const parentContainer = document.getElementById(container);
    const ul = document.createElement('ul');
    items.forEach(element => {
        const itemAdd = document.createElement('p');
        itemAdd.innerText = element;
        itemAdd.style.color = color;
        itemAdd.style.fontSize = `${font}em`;

        ul.appendChild(itemAdd);
    });
    parentContainer.appendChild(ul);
};