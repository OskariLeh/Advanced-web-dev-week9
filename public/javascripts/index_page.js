


function showEmail() {
    const authToken = localStorage.getItem("auth_token")
    if (!authToken){
        return 
    }


    fetch("/users/email", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({token: authToken})
    })
    .then((response) => response.json())
    .then((data) => {
        const logoutBtn = document.createElement("button")
        const email = document.createElement("p")
        logoutBtn.textContent = "Logout"
        logoutBtn.id = "logout"
        logoutBtn.addEventListener("click", onLogout)
        email.textContent = data
        document.getElementById("box").appendChild(logoutBtn)
        document.getElementById("box").appendChild(email)
    }) 
}

function onLogout() {
    localStorage.removeItem("auth_token")
    window.location.href = "/"
}

showEmail()