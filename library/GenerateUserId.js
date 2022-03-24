// Function to generate code ID
export const generateUserId = () => {
    // digits variable which stores all digits
    const digits_and_alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    // Find the length of string
    const len = digits_and_alphabet.length;

    let id = '';
    for (let i = 0; i < 4; i++) {
        id += digits_and_alphabet[Math.floor(Math.random() * len)];
    }
    return id;
}