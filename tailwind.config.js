/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    darkMode: false,
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
