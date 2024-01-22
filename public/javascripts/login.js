
form = document.getElementById("login-form")

form.addEventListener("submit", onSubmit)



function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)

    fetch("/users/login", {
        method: "POST",
        body: formData
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.token){
            localStorage.setItem("auth_token", data.token)
            window.location.href="/"
        } 
    })
}
