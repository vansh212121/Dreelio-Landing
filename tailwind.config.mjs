// This is the new ES Module import syntax
import tailwindcssAnimate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Your custom fonts are now included
      fontFamily: {
        serif: ['Poppins', 'sans-serif'],
        hero: ['Montserrat', 'sans-serif'],
        sans: ['"Glacial Indifference"', 'sans-serif'],
        "open-runde": ['"Open Runde"', 'sans-serif']
      },
      // Your full color palette is now included
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        peach: "hsl(var(--peach))",
        mint: "hsl(var(--mint))",
        purple: "hsl(var(--purple))",
        goldy: "hsl(var(--goldy))",
        footer: "hsl(var(--footer))",
        "baby-pink": "hsl(var(--baby-pink))",
        "baby-blue": "hsl(var(--baby-blue))",
        gold: {
          DEFAULT: 'hsl(var(--gold))',
          light: 'hsl(var(--gold-light))',
          dark: 'hsl(var(--gold-dark))'
        },
        navy: {
          DEFAULT: 'hsl(var(--navy))',
          light: 'hsl(var(--navy-light))',
          dark: 'hsl(var(--navy-dark))'
        },
        charcoal: {
          DEFAULT: 'hsl(var(--charcoal))',
          light: 'hsl(var(--charcoal-light))',
          dark: 'hsl(var(--charcoal-dark))'
        },
        cream: {
          DEFAULT: 'hsl(var(--cream))',
          light: 'hsl(var(--cream-light))',
          dark: 'hsl(var(--cream-dark))'
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Your keyframes and animations are included
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
      },
      // Your gradients are included
      backgroundImage: {
        "gradient-hue": "var(--gradient-hue)",
        "gradient-subtle": "var(--gradient-subtle)",
        "gradient-bg": "var(--gradient-bg)",
      },
    },
  },
  // This now uses the imported variable
  plugins: [tailwindcssAnimate],
}

export default config