/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height:{
                'im': '700px',
                'im2': '800px',

            },
            width:{
                'mp': '380px'
            }
        },
    },
    plugins: [

    ],
};
