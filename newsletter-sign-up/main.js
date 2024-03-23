/* FORM FUNCTIONALITY AND STYLING, ERROR AND SUCCESS MESSAGE */

let form = document.getElementById("form")
let email = document.getElementById("emailaddress")

let changes = {
    error: {
        "color": "hsl(4, 100%, 67%)",
        "border": "1px solid hsl(4, 100%, 67%)",
        "background-color": "rgba(255,0,0,0.2)",
    },
    focus: {
        "color": "black",
        "border": "1px solid hsl(231, 7%, 60%)",
        "background-color": "white"
    }
}

function validate() {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return regex.test(email.value)
}



form.addEventListener("submit", function(event) { /* FORM SUBMIT BUTTON CLICK */
    event.preventDefault()

    let isvalid = validate()

    if (isvalid) { /* SUCCESS */
    sessionStorage.setItem("email", email.value)
        window.location.href = "success.html"
    } else { /* FAILURE */
    email.setCustomValidity("")
        document.getElementById("fail").style.display = "block"
        for (let [prop,val] of Object.entries(changes.error)) {
            email.style[prop] = val
        }
    }
})

email.addEventListener("focus", function(event) {
    for (let [prop,val] of Object.entries(changes.focus)) {
        email.style[prop] = val
    }
    document.getElementById("fail").style.display = "none"
})