document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Error",
        text: "El correo electrónico no es válido",
        icon: "error"
      });
      return;
    }
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: "Error",
        text: "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número",
        icon: "error"
      });
      return;
    }
    Swal.fire({
      title: "Registro exitoso",
      text: "La cuenta ha sido registrada",
      icon: "success"
    });
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
  
  