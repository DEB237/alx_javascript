function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve the values entered in the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Use JavaScript validation to ensure that all required fields are filled
    if (name === '' || email === '') {
      // Display an error message if any required fields are empty
      document.getElementById('error').textContent = 'Please fill in all required fields';
      return; // Stop further execution
    }

    // If all validations pass, display a success message
    document.getElementById('success').textContent = 'Form submitted successfully!';
  }

document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);
