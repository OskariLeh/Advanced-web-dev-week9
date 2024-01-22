


function showEmail() {
    event.preventDefault()
    const authToken = localStorage.getItem("auth_token")
    if (!authToken){
        return 
    }

    fetch("/users/index_logged_in", {
        method: "GET"
    })
    .then((response) => response.text())
    .then((page) => {
        const logoutBtn = document.createElement("button")
        const email = document.createElement("p")
        email.textContent = authToken
    }) 
}