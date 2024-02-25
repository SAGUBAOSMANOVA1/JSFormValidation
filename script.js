document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); 
        }
    });
  
    function validateForm() {
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var address = document.getElementById('address').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
  
        var firstNameError = document.getElementById('firstNameError');
        var lastNameError = document.getElementById('lastNameError');
        var addressError = document.getElementById('addressError');
        var emailError = document.getElementById('emailError');
        var passwordError = document.getElementById('passwordError');
        var errorMessages = document.getElementById('errorMessages');
  
       
        firstNameError.innerHTML = '';
        lastNameError.innerHTML = '';
        addressError.innerHTML = '';
        emailError.innerHTML = '';
        passwordError.innerHTML = '';
        errorMessages.innerHTML = '';
  
        var hasError = false;
  
        if (firstName.trim() === '') {
            displayErrorMessage('First Name is required', firstNameError);
            hasError = true;
        }
  
        if (lastName.trim() === '') {
            displayErrorMessage('Last Name is required', lastNameError);
            hasError = true;
        }
  
        if (address.trim() === '') {
            displayErrorMessage('Address is required', addressError);
            hasError = true;
        }
  
        if (email.trim() === '') {
            displayErrorMessage('Email is required', emailError);
            hasError = true;
        }
  
        if (password.trim() === '') {
            displayErrorMessage('Password is required', passwordError);
            hasError = true;
        }
  
        if (hasError) {
            alert('Add all info');
            return false; 
        }
  
        alert('Success'); 
        return true;
    }
  
    function displayErrorMessage(message, element) {
        var errorMessage = document.createElement('div');
        errorMessage.className = 'error';
        errorMessage.textContent = message;
        element.appendChild(errorMessage);
    }
  
    document.getElementById('firstName').addEventListener('input', function () {
        document.getElementById('firstNameError').innerHTML = '';
    });
  
    document.getElementById('lastName').addEventListener('input', function () {
        document.getElementById('lastNameError').innerHTML = '';
    });
  
    document.getElementById('address').addEventListener('input', function () {
        document.getElementById('addressError').innerHTML = '';
    });
  
    document.getElementById('email').addEventListener('input', function () {
        document.getElementById('emailError').innerHTML = '';
    });
  
    document.getElementById('password').addEventListener('input', function () {
        document.getElementById('passwordError').innerHTML = '';
    });
  });
  