import { extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'
import '@fontsource/inter/variable.css'

// color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = {
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  heading: 'Inter, Work Sans, system-ui, sans-serif',
}

export const customTheme = extendTheme(
  {
    colors: { ...theme.colors, brand: theme.colors.blue },
    config: config,
    fonts: fonts,
    styles: {
      global: {
        html: { scrollBehavior: 'smooth' },
      },
    },
  },
  theme,
)
