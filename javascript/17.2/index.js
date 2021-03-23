let x = document.getElementById("myTextArea");

function isValid() {
    if (x.value.length < 100) {
        return document.body.innerHTML = document.body.innerHTML + x.value + " is Less than 100 words. Please insert more than 100 letters";
    }
    // console.log(x.value.length);
}