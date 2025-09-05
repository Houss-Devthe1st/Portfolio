/** @type {import('tailwindcss').Config} */
module.exports = {
    theme:{
        gridTemplateColumns:{
            'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        },
        fontFamily:{
            Outfit:["Outfit", "sans-serif"],
            Ubuntu:["Ubuntu", "sans-serif"]
        },
        animation:{
            spin_slow: 'spin 6s linear infinite'
        },
        colors:{
            darkTheme:'#11001F'
        }
    },
    darkMode: 'selector'
}