document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Error: El correo electrónico no es válido");
      return;
    }
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Error: La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número");
      return;
    }
    alert("Registro exitoso: La cuenta ha sido registrada");
    document.getElementById("signup-form").reset();
  });
  
  var prevScrollPos = window.pageYOffset;
  
  window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;
    var footer = document.querySelector('footer');
    
    if (currentScrollPos > prevScrollPos) {
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
    
    prevScrollPos = currentScrollPos;
  });