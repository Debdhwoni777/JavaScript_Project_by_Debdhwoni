function mirrorMirror(str) {
    // Reverse the original string using split, reverse, and join methods
    const reversedStr = str.split('').reverse().join('');
    
    // Append the reversed string to the original string
    return str + reversedStr;
}

// Example usage
const originalString = "hello";
const mirroredString = mirrorMirror(originalString);
console.log(mirroredString);
