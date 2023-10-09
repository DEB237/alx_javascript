window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dynamicForm');
    const select = document.getElementById('numFields');
    const inputContainer = document.getElementById('inputContainer');
  
    select.addEventListener('change', function() {
      const selectedValue = select.value;
      generateInputFields(selectedValue);
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      validateForm();
    });
  
    function generateInputFields(numFields) {
      inputContainer.innerHTML = ''; // Clear previous input fields
  
      for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'field' + i;
        inputField.placeholder = 'Field ' + i;
        inputContainer.appendChild(inputField);
      }
    }
  
    function validateForm() {
      const inputFields = document.querySelectorAll('#inputContainer input');
  
      for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.trim() === '') {
          alert('Please fill in all fields');
          return;
        }
      }
  
      form.submit();
    }
  });