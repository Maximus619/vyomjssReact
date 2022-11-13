const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;
// document.getElementById('date_posted').defaultValue = currentDate;

var x = document.forms["data[name]"].value;


var form = document.getElementById("sheetdb-form");
const thankYouMessage = document.querySelector('#thank-you-message');


console.log(1);

form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Hello");
    console.log(1);
    if (validateForm() === true) {
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        })

        thankYouMessage.classList.add('show');
        setTimeout(() => thankYouMessage.classList.remove('show'), 2000);

        setTimeout(() => form.reset(), 2100);
    }

})

function validateForm() {
    console.log(1);
    const errorMessage = document.querySelector('#error-message');
    var x = document.forms["myForm"]["data[name]"].value;
    var y = document.forms["myForm"]["data[email]"].value;
    var z = document.forms["myForm"]["data[mobile]"].value;
    var zx = document.forms["myForm"]["data[feedback]"].value;
    if (x === "" || x == null) {
        errorMessage.innerHTML = "Name cannot be Empty";
        errorMessage.classList.add('show');
        setTimeout(() => errorMessage.classList.remove('show'), 2000);
        document.forms["myForm"]["data[name]"].focus();
        return false;
    }
    if (y === "" || y == null) {
        errorMessage.innerHTML = "Email cannot be Empty";
        errorMessage.classList.add('show');
        setTimeout(() => errorMessage.classList.remove('show'), 2000);
        document.forms["myForm"]["data[email]"].focus();
        return false;
    }
    if (z === "" || z == null) {
        errorMessage.innerHTML = "Mobile Number cannot be Empty";
        errorMessage.classList.add('show');
        setTimeout(() => errorMessage.classList.remove('show'), 2000);
        document.forms["myForm"]["data[mobile]"].focus();
        return false;
    }
    if (zx === "" || zx == null) {
        errorMessage.innerHTML = "Message cannot be Empty";
        errorMessage.classList.add('show');
        setTimeout(() => errorMessage.classList.remove('show'), 2000);
        document.forms["myForm"]["data[feedback]"].focus();
        return false;
    }
    else {

        return true;
    }
}