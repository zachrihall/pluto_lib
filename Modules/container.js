// export function link(text, href, aria, width, name){
//     const link = document.createElement('a');
//     link.innerText = text;
//     link.style.fontSize = `${width}px`;
//     link.href = href;
//     link.classList.add(name);
//     link.ariaLabel = aria;
//     document.body.appendChild(link);
// };

export function container(name, align) {
    const container = document.createElement('div');
    container.style.display = 'flex';
    if (align === 'horizontal') {
        container.style.flexDirection = 'row';
    } else {
        container.style.flexDirection = 'column';
    }
    container.id = name;
    document.body.appendChild(container);
}