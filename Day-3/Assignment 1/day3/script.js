document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); 
      
     
      var username = document.getElementById("username").value;
      var email = document.getElementById("Email").value;
      var password = document.getElementById("password").value;

      
      if (username === "pallavi" && password === "palls" && email === "pallaviadhikary69@gmail.com") {
          
          window.location.href = "welcome.html";
      } else {
          
          alert("Login unsuccessful. Please check your username, password, and email.");
      }
  });
});
