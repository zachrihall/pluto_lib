export function container(name, direction, align, color) {
    const container = document.createElement('div');
    container.style.display = 'flex';
    if (direction === 'horizontal') {
        container.style.flexDirection = 'row';
    } else {
        container.style.flexDirection = 'column';
    }

    if (align === 'center') {
        container.style.alignItems = 'center';
    } else if (align === 'end') {
        container.style.alignItems = 'end';
    } else {
        container.style.alignItems = 'start';
    }
    container.id = name;
    container.style.backgroundColor = color;
    document.body.appendChild(container);
}