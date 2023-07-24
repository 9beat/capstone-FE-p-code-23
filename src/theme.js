//  THEME SETTINGS
export const themeSettings = (mode) => {
    return {
        palette: {
            mode,
            ...(mode === "dark" ? {
                // DARK MODE
                primary: {
                    dark: colorTokens.primary[200],
                    main: colorTokens.primary[300],
                    light: colorTokens.primary[500],
                },
                neutral: {
                    dark: colorTokens.grey[100],
                    main: colorTokens.grey[500],
                    mediumMain: colorTokens.grey[300],
                    medium: colorTokens.grey[200],
                    light: colorTokens.grey[700],
                },
                background: {
                    default: colorTokens.primary[1000],
                    alt: colorTokens.primary[900], 
                }
            } : {
                // LIGHT MODE
                primary: {
                    dark: colorTokens.primary[700],
                    main: colorTokens.primary[500],
                    light: colorTokens.primary[500],
                },
                neutral: {
                    dark: colorTokens.grey[400],
                    main: colorTokens.grey[500],
                    mediumMain: colorTokens.secondary[200],
                    medium: colorTokens.grey[300],
                    light: colorTokens.secondary[50],
                },
                background: {
                    default: colorTokens.primary[50],
                    alt: colorTokens.primary[100], 
                }
            }),
        },
        typography: {
            fontFamily: ['Oswald', 'Poppins', 'sans-serif'].join(','),
            fontSize: 16,
            h1: {
                fontFamily: ['Oswald', 'Poppins', 'sans-serif'].join(','),
                fontSize: 42, 
            },
            h2: {
                fontFamily: ['Oswald', 'Poppins', 'sans-serif'].join(','),
                fontSize: 34, 
            },
            h3: {
                fontFamily: ['Oswald', 'Poppins', 'sans-serif'].join(','),
                fontSize: 26, 
            },
            h4: {
                fontFamily: ['Oswald', 'Poppins', 'sans-serif'].join(','),
                fontSize: 20, 
            },
            h5: {
                fontFamily: ['Oswald', 'Poppins', 'sans-serif'].join(','),
                fontSize: 14, 
            },
            h6: {
                fontFamily: ['Oswald', 'Poppins', 'sans-serif'].join(','),
                fontSize: 10, 
            }
        }
    }
}


// color design tokens export
const colorTokens = {
    grey: {
        0: "hsl(300, 2%, 80%)", //* light // theme.palette.BACKGROUND.alt (0)
        10: "hsl(295, 4%, 70%)", //^ light // theme.palette.BACKGROUND.default (10)
        50: "hsl(290, 6%, 60%)", //^ light // theme.palette.neutral.light (50)
        100: "hsl(280, 8%, 55%)", //^ light // theme.palette.neutral.medium (100)
        200: "hsl(270, 10%, 50%)",
        300: "hsl(260, 12%, 45%)", 
        400: "hsl(250, 14%, 40%)", //^ light // theme.palette.neutral.mediumMain (400)
        500: "hsl(254, 16%, 35%)", //^ light/dark // theme.palette.neutral.main (500)
        600: "hsl(258, 18%, 30%)",
        700: "hsl(261, 20%, 25%)", //^ light // theme.palette.neutral.main (700)
        800: "hsl(264, 22%, 20%)", 
        900: "hsl(267, 24%, 10%)", 
        1000: "hsl(270, 26%, 5%)",
    },
    primary: {
        50: "hsl(281, 100%, 95%)", //* light // theme.palette.primary.light (50)
        100: "hsl(281, 100%, 90%)",
        200: "hsl(281, 100%, 80%)",
        300: "hsl(281, 100%, 74%)", 
        400: "hsl(281, 100%, 69%)", //^ light // theme.palette.primary.light (400)
        500: "hsl(281, 100%, 50%)",
        600: "hsl(281, 100%, 37%)", //^ light // theme.palette.primary.light (600)
        700: "hsl(281, 100%, 25%)", 
        800: "hsl(281, 100%, 12%)", //! dark // theme.palette.BACKGROUND.alt (800)
        900: "hsl(281, 100%, 7%)", // // ! dark // theme.palette.BACKGROUND.default (900)
        1000: "hsl(281, 50%, 5%)", //! dark // theme.palette.BACKGROUND.default (1000)    
    },
    secondary: {
        50: "hsl(183, 100%, 95%, 1)", //^ light // theme.palette.BACKGROUND.alt (0)
        100: "hsl(183, 100%, 90%, 0.9)", 
        200: "hsl(183, 100%, 80%, 0.9)",
        300: "hsl(183, 100%, 74%, 0.9)",
        400: "hsl(183, 100%, 69%, 0.8)",
        500: "hsl(183, 100%, 50%, 0.7)",
        600: "hsl(183, 100%, 37%, 0.5)",
        700: "hsl(183, 100%, 25%, 0.3)",
        800: "hsl(183, 100%, 12%, 0.2)",
        900: "hsl(183, 100%, 5%)",
    }

};
