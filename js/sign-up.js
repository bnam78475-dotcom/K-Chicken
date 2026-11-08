// ĐI tìm thẻ form bằng câu lênh querySelector 
// và gán nó vào biến register
let register = document.querySelector("form")
register.addEventListener("submit", function (event) {
    event.preventDefault();// Ngăn chặn hvi mặc định của form là gửi dữ liệu đi

    let name = document.getElementById("username").value.trim()
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()
    
    if (localStorage.getItem("user")) {
        let users_data = JSON.parse(localStorage.getItem("user"))
        users_data.push(
            {
                name: name,
                email: email,
                password: password
            }
        )
        localStorage.setItem("user", JSON.stringify(users_data))
        location.href = "sign-in.html"
    } else {
        let users_data = [
            {
                name: name,
                email: email,
                password: password
            }
        ]
        localStorage.setItem("user", JSON.stringify(users_data))
        location.href = "sign-in.html"
    }
    console.log(name)
    console.log(email)
    console.log(password)
}
)