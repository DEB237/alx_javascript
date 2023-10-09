window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password');
    const errorParagraph = document.getElementById('error');
  
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      validatePassword(passwordInput.value);
    });
  
    function validatePassword(password) {
      const passwordLength = password.length;
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[!@#$%^&*]/.test(password);
  
      let isValid = true;
      let errorMessage = '';
  
      if (passwordLength < 8) {
        isValid = false;
        errorMessage += 'Password must be at least 8 characters long.<br>';
      }
  
      if (!hasUppercase) {
        isValid = false;
        errorMessage += 'Password must contain at least one uppercase letter.<br>';
      }
  
      if (!hasLowercase) {
        isValid = false;
        errorMessage += 'Password must contain at least one lowercase letter.<br>';
      }
  
      if (!hasNumber) {
        isValid = false;
        errorMessage += 'Password must contain at least one numeric digit.<br>';
      }
  
      if (!hasSpecialChar) {
        isValid = false;
        errorMessage += 'Password must contain at least one special character (e.g., !@#$%^&*).<br>';
      }
  
      errorParagraph.innerHTML = errorMessage;
  
      if (isValid) {
        form.submit();
      }
    }
  });