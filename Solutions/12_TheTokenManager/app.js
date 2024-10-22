// Function to set the authentication token in localStorage with an expiration time
function setAuthToken(token, expirationTimeInMinutes) {
    const currentTime = new Date().getTime();
    const expirationTime = currentTime + expirationTimeInMinutes * 60000; // Convert minutes to milliseconds

    // Save the token and expiration time as an object in localStorage
    const authData = {
        token: token,
        expiresAt: expirationTime
    };

    localStorage.setItem("authToken", JSON.stringify(authData));
}

// Function to retrieve the authentication token from localStorage
function getAuthToken() {
    const authData = JSON.parse(localStorage.getItem("authToken"));
    
    if (!authData) {
        return null;
    }

    const currentTime = new Date().getTime();

    // Check if the token has expired
    if (currentTime > authData.expiresAt) {
        // Token is expired, remove it from localStorage
        localStorage.removeItem("authToken");
        return null;
    }

    // Return the token if it's still valid
    return authData.token;
}

// Function to remove the authentication token from localStorage (manual logout)
function removeAuthToken() {
    localStorage.removeItem("authToken");
}

// Example usage of the setAuthToken function
document.getElementById("loginButton").addEventListener("click", () => {
    const token = "12345abcdef";  // This would be retrieved from a login API
    const expirationTimeInMinutes = 30; // Set token to expire in 30 minutes
    setAuthToken(token, expirationTimeInMinutes);
    console.log("Auth token set successfully.");
});

document.getElementById("checkTokenButton").addEventListener("click", () => {
    const token = getAuthToken();
    if (token) {
        console.log("Token is still valid:", token);
    } else {
        console.log("Token is expired or does not exist.");
    }
});

document.getElementById("logoutButton").addEventListener("click", () => {
    removeAuthToken();
    console.log("Logged out successfully.");
});
