
function isPalindrome(stringInput) {
    let filteredString = (stringInput.replace(/[^a-zA-Z0-9]/g, '')).toUpperCase();

    for (let i = 0; i < filteredString.length / 2; i++) {

        console.log(filteredString[i]);
        console.log(filteredString[filteredString.length - 1 - i]);
        console.log('------------');

        if (filteredString[i] != filteredString[filteredString.length - 1 - i]) {
            
            return false;
        }
    }

    return true;
}

console.log(isPalindrome("A man a plan a canal Panama"));