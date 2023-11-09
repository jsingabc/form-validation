//grab all of my input variables to get values later
let email = document.getElementById("email");
let country = document.getElementById("country")
let zip = document.getElementById("zip")
let password = document.getElementById("password")
let confirm = document.getElementById("confirm")
let form = document.getElementById("myForm")

//event listener on the form to listen to submit button
form.addEventListener("submit", (e) => {
    //stops deufault submit behavior
    e.preventDefault()
    console.log("form listening")

    password.checkValidity("") //check custom errors
    console.log(password.value)
    console.log(confirm.value)

    if (password.value !== confirm.value){
        console.log("These dont match")
        password.setCustomValidity("Make sure they match")
        password.reportValidity()
    }

    zip.checkValidity('') // check custom errors
    console.log(zip.value)

    if (zip.value.length > 5){
        console.log("only 5 values please")
        zip.setCustomValidity("Only 5 Numbers")
        zip.reportValidity()
    }

    //this checks for custom errors
    country.setCustomValidity('')
    //set new var to check current status and log
    let currCountry = country.checkValidity('')
    console.log(currCountry)

    console.log(country.value)
    //this sets to look 0-9
    let nums = /[0-9]/g;
    console.log(nums)
    //if any matches than fire off if code 
    if (country.value.match(nums)) {
        console.log("Dont use numbers")
        country.setCustomValidity("No Numbers!")
        console.log(country.validity) // console log obj checklist
        country.reportValidity()// reports msg to broswer no numbers
    }

    //built in test for errors based on attributes
    //message used for custom errors
    email.setCustomValidity('')
    let currently = email.checkValidity(); // shows built in method to user

    if (currently) {
        let reg = new RegExp('gmail.com$', 'i');
        if (reg.test(email.value) === false) {
            console.log("not a gmail account")
            email.setCustomValidity("NOT A GMAIL")
            console.log(email.validity)
            console.log(email.reportValidity()) //fire event on browser for user
        }
    }
    
})

    
console.log('willValidate', country.willValidate)
console.log(country.validity)

//console.log('willValidate', email.willValidate)
//console.log(email.validity)

