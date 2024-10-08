const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pw = document.getElementById("pw");
const login = document.getElementById("login");


form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let error = false;

    if (username.value.length === 0) {
        username.classList.add("error");
        error = true;
    }

    if (email.value.length === 0) {
        email.classList.add("error");
        error = true;
    }

    if (pw.value.length === 0) {
        pw.classList.add("error");
        error = true;
    }

    if (!error) {

        
        const data = new FormData();

        data.append("username", username.value);
        data.append("email", email.value);
        data.append("password", pw.value);

        console.log(data.get("username"));
        console.log(data.get("email"));
        console.log(data.get("password"));
    
        username.value = "";
        email.value = "";
        pw.value = "";
        const response = await fetch("sitefake", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });

    } else {
        alert("confira os campos do formulário!!");
    }
})

username.addEventListener("change", () => {
    username.classList.remove("error");
})

email.addEventListener("change", () => {
    email.classList.remove("error");
})

pw.addEventListener("change", () => {
    pw.classList.remove("error");
})

login.addEventListener("click", () => {
    alert("não fiz essa página kk")
})
