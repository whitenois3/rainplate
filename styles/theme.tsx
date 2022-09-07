import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
})

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    colors: {
            transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
            800: '#000',
        },
    },
    fonts,
    breakpoints,
    global: {
        body: {
            bg: "black"
        }
    }
})

export default theme
