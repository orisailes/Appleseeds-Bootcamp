const checkbox = document.querySelector(`input[type=checkbox]`)
let image = document.querySelector(`img`)


function handleChecked(ev) {
    if (this.checked) {
        image.style.visibility = `visible`
    }else{
        image.style.visibility = `hidden`
    }
}

checkbox.addEventListener('change', handleChecked)