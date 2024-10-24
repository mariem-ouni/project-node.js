// Import the generate-password package
const generatePassword = require('generate-password');

// Function to generate a random password and log it
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, // Set the password length
    numbers: true, // Include numbers
    symbols: true, // Include symbols
    uppercase: true, // Include uppercase letters
    lowercase: true // Include lowercase letters
  });

  // Log the generated password
  console.log('Generated password:', password);
}

// Call the function to generate and log the password
generateRandomPassword();
