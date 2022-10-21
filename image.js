// source for image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/640px-Soccerball.svg.png


// const para = document.createElement("p");
// para.innerText = "This is a paragraph";
// document.body.appendChild(para);
src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/640px-Soccerball.svg.png'

function makeSoccerBall(src, width, name) {
    const img = document.createElement('img');
    img.style.width = `${width}px`;
    img.src = src;
    img.classList.add(name)
    document.body.appendChild(img);
}

// makeSoccerBall(src, 40, 'my-image');

// module.exports = {makeSoccerBall}

// export default makeSoccerBall;

