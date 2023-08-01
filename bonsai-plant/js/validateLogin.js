// validate login

const email = document.getElementById("email")
const password = document.getElementById("password")
const loginBtn = document.getElementById("login-btn")
const statusDiv = document.getElementById("status")

// run callback function after login button is clicked
loginBtn.addEventListener("click", () => {

    // check if email and password is not empty
    if(!email.value || !password.value) {
        return alert("All fields are required .")
    }

    // check length of password
    if(password.value.length < 6) {
        return alert("Password must be at least 6 characters long.")
    }

    // start logging in
    statusDiv.innerText = "Logging in ...."

    // redirect to home page after 3 seconds
    setTimeout(() => {
        window.location.assign("/")
    }, 3000)

})