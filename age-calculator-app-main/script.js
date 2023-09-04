const inputFields = document.querySelectorAll(".input-field");
const calculateButton = document.querySelector(".cal__button");
const errorMessages = document.querySelectorAll('.error');
const headers = document.querySelectorAll('.header');
const finalValues = document.querySelectorAll('.display > .value');


const today = new Date();
console.log(today.getFullYear(), today.getMonth(), today.getDate());

calculateButton.addEventListener("click", () => {
    inputFields.forEach(inputField => {
        if (inputField.value == "") inputField.classList.add("error__input");        
    })

    let day = parseInt(inputFields[0].value);
    console.log(typeof(day));
    let month = parseInt(inputFields[1].value);
    let year = parseInt(inputFields[2].value);
    
    console.log(day, month, year);
    checkValidInput(day, month, year);

})


const checkValidInput = (day, month, year) => {
    if (day > 31 || month > 12 || year > today.getFullYear()) {
        errorMessages.forEach(message => {
            message.style.display = "block";
            inputFields.forEach(inputField => {
                inputField.classList.add("error__input");        
            })

            headers.forEach(header => {
                header.classList.add('header__error');
            })
        })
    } else {
        let birthDate = new Date(`${month}/${day}/${year}`);
        let currentDate = new Date();

        let TimeDiff = Math.abs(currentDate - birthDate);
        let finalYear = Math.floor(Math.floor(TimeDiff / 1000) / 31536000);
        let finalMonth = Math.floor((Math.floor(TimeDiff / 1000) % 31536000) / 2628288);
        let finalDay = Math.floor(((Math.floor(TimeDiff / 1000) % 31536000) % 2628288) / 86400);

        finalValues[0].innerHTML = finalYear;
        finalValues[1].innerHTML = finalMonth;
        finalValues[2].innerHTML = finalDay;
    }
}