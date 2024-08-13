import type { Config } from "tailwindcss"
import type { PluginCreator } from 'tailwindcss/types/config'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./src/pages//*.{js,ts,jsx,tsx,mdx}",
    "./src/components//*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        redanim: {
          '0%': {
            height: '0',
          },
          '100%': {
            height: '50vh',
          },
        },
        redanim_next: {
          '0%': {
            height: '50vh',
          },
          '100%': {
            height: '0',
          },
        },
        redanimup: {
          '0%': {
            height: '100vh',
          },
          '100%': {
            height: '50vh',
          },
        },
        redanimup_next: {
          '0%': {
            height: '50vh',
          },
          '100%': {
            height: '100vh',
          },
        },
        hide: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0)',
            opacity: '0',
          },
        },
        visible: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        rot: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        'animation_down': 'redanim 1.1s ease-in-out both 1s',
        'animation_down_next': 'redanim_next 1.1s ease-in-out both .25s',
        'animation_up': 'redanimup 1.1s ease-in-out both 1s',
        'animation_up_next': 'redanimup_next 1.1s ease-in-out both .25s',
        'hide_icon_stolb': 'hide 1.5s both',
        'visible_icon_stolb': 'visible 1.5s both',
        'rotate_logo': 'rot 3.5s both 0.5s',
      },
      animationDelay: {
        '1000': '1s',
        '250': '0.25s',
      },
    },
  },
  plugins: [plugin(function ({ addUtilities }) {
    const newUtilities = {
      '.flex-direction-important': {
        flexDirection: 'column !important',
      },
      '.poloska': {
        width: '5px',
        height: "50vh"
      },
      ".icon": {
        width: "36px",
        height: "36px",
        boxShadow: "0px 0px 25px #5c54ca"
      }
    }
    addUtilities(newUtilities, ['responsive', 'hover'])
  } as PluginCreator)],
}
export default config
