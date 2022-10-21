
function image(src, width, name) {
    const img = document.createElement('img');
    img.style.width = `${width}px`;
    img.src = src;
    img.classList.add(name)
    document.body.appendChild(img);
}

module.exports = {image}


