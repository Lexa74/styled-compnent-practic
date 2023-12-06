const colors = {
    0: '#fff',
    50: '#FFFAF0',
    100: '#FEEBC8',
    200: '#FBD38D',
    300: '#F6AD55',
    400: '#ED8936',
    500: '#DD6B20',
    600: '#B7791F',
    700: '#975A16',
    800: '#744210',
    900: '#5F370E',
    1000: '#000',
}

export const lightTheme = {
    body: colors["50"],
    text: colors["1000"],
    primary: colors["600"],
    secondary: colors["700"],
    primaryHover: colors["800"],
    primaryTextHover: colors["0"],
}

export const darkTheme = {
    body: colors["900"],
    text: colors["0"],
    primary: colors["200"],
    secondary: colors["100"],
    primaryHover: colors["800"],
    primaryTextHover: colors["200"],
}