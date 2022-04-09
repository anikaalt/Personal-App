function addUser()
{
user_name = document.getElementById("user_name").value; 
localStorage.setItem("user_name", user_name);
pass_name = document.getElementById("pass_name").value; 
localStorage.setItem("pass_name", user_name);
window.location = "homepage.html";
}