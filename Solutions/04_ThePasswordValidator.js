function passwordValidator(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Check for at least one uppercase letter
    const hasUpperCase = /[A-Z]/.test(password);

    // Check for at least one lowercase letter
    const hasLowerCase = /[a-z]/.test(password);

    // Check for at least one digit
    const hasDigit = /\d/.test(password);

    // Password is valid only if all conditions are true
    return hasUpperCase && hasLowerCase && hasDigit;
}

// Example usage
const password1 = "Passw0rd";
const password2 = "password";
const password3 = "PASS1234";

console.log(passwordValidator(password1)); // true
console.log(passwordValidator(password2)); // false
console.log(passwordValidator(password3)); // false
