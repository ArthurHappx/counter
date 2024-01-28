// making number counter
const box = document.getElementsByClassName('box')[0]
var count = 0
let number_click = document.getElementById('number')

box.addEventListener('click', clicked)

function clicked() {
    Number.parseInt(count)
    console.log(count)
    ++count //increment

    if (count < 0 && count > -10) {
        count = '-0' + Math.abs(count)
    }

    if (count < 10 && count >= 0) {
        count = '0' + count
    }

    number_click.textContent = count
}

// making number counter reload
const reload = document.getElementsByClassName('icon-reload')[0]

reload.addEventListener('click', reloaded)

function reloaded() {
    count = 0
    number_click.textContent = '00'
}

// making back button in counter
const back = document.getElementsByClassName('icon-back')[0]

back.addEventListener('click', backed)

function backed() {
    Number.parseInt(count)
    console.log(count)
    --count //decrement

    if (count < 0 && count > -10) {
        count = '-0' + Math.abs(count)
    }

    if (count < 10 && count >= 0) {
        count = '0' + count
    }

    number_click.textContent = count
}
