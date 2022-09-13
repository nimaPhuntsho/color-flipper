const btn = document.getElementById('btn');
const background = document.getElementById('background');
const one = document.getElementById('one');
const color = document.getElementById('color');

btn.addEventListener ('click', () => {
    let colors = ['black', 'blue', 'red', 'purple', 'green', 'red', 'cyan', 'brown'];
    let randomNumber = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomNumber];
    background.style.backgroundColor = randomColor;
    color.innerText = randomColor.toUpperCase();
});

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'cyan';
})

btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = "";
});