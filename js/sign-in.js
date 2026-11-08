// ĐI tìm thẻ form bằng câu lênh querySelector 
// và gán nó vào biến register
let login = document.querySelector("form")
login.addEventListener("submit", function (event) {
    event.preventDefault();// Ngăn chặn hvi mặc định của form là gửi dữ liệu đi

    let name = document.getElementById("username").value.trim()
    let password = document.getElementById("password").value.trim()
    let users_data = JSON.parse(localStorage.getItem("user"))
    let current_user = users_data.find(
        u => u.name === name && u.password === password
    )
    if (current_user) {
        localStorage.setItem("current_user", JSON.stringify(current_user))
        location.href = "index.html"
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!!!")
    }
})