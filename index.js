let value = document.querySelector('.txt');

let inc = () => {
    let number = parseInt(value.innerText);
    number = number + 1;
    value.innerText = number;
}
let dec = () => {
    let number = parseInt(value.innerText);
    number = number - 1;
    value.innerText = number;
}