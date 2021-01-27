module.exports = {
    purge: ["./src/**/*.js", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                mobile: { max: "375px" },
                desktop: { max: "1440px" },
            },
            colors: {
                primaryColor: "hsl(220, 98%, 61%)",
                /* Light Theme */
                veryLightGray: "hsl(0, 0%, 98%)",
                veryLightGrayishBlue: "hsl(236, 33%, 92%)",
                lightGrayishBlue: "hsl(233, 11%, 84%)",
                darkGrayishBlue: "hsl(236, 9%, 61%)",
                veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
                /* Dark Theme */
                veryDarkBlue: "hsl(235, 21%, 11%)",
                veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
                lightGrayishBlue: "hsl(234, 39%, 85%)",
                lightGrayishBlueHover: "hsl(236, 33%, 92%)",
                DarkGrayishBlue: "hsl(234, 11%, 52%)",
                veryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
                veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
            },
            fontFamily: {
                josefinSerif: "'Josefin Sans', sans-serif",
            },
            fontWeight: {
                medium: 400,
                large: 700,
            },
            fontSize: {
                josefinBody: "18px",
            },
            letterSpacing: {
                "4em": ".4em",
            },
            backgroundImage: {
                "mobile-dark": "url('./images/bg-mobile-dark.jpg')",
                "mobile-light": "url('./images/bg-mobile-light.jpg')",
                "desktop-dark": "url('./images/bg-desktop-dark.jpg')",
                "desktop-light": "url('./images/bg-desktop-light.jpg')",
                br: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
