// tailwind.config.mjs
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
  darkMode: "class",

  /* Breakpoints + container según tus devices */
  theme: {
    screens: {
      xs: "375px",  // Mobile
      md: "744px",  // Tablet
      xl: "1440px", // Desktop
    },
    container: {
      center: true,
      padding: {
        default: "16px",
        md: "32px",    
        xl: "120px",    
      },
    },

    extend: {
      colors: {
        branding: {
          light: "#dfeaff",
          dark:  "#1b1f28",
          blue:  "#407bff",
        },

        ui: {
          light: {
            card:   "#ffffff",
            text:   "#2e2e2e",
            shadow: "#0000001a",
            link:   "#1e90ff",
            hover:  "#359bff",
            border: "#dddddd",
          },

          dark: {
            card:   "#252a34",
            text:   "#e4e6eb",
            shadow: "#00000066",
            link:   "#4a90e2",
            hover:  "#5c9be5",
            border: "#444444",
          },
        },

        status: {
          success:  "#4caf50",
          error:    "#f44336",
          warning:  "#ff9800",
          disabled: "#9e9e9e",
          info:     "#2196f3",
        },
      },

      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"], // Headings + Buttons
        sans:    ["Raleway", "system-ui", "sans-serif"], // Body
      },
      fontSize: {
        // Headings (Poppins)
        h1: ["48px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "120%", letterSpacing: "0.02em", fontWeight: "700" }],
        h3: ["28px", { lineHeight: "130%", fontWeight: "600" }],
        h4: ["20px", { lineHeight: "130%", fontWeight: "600" }],
        h5: ["18px", { lineHeight: "140%", fontWeight: "500" }],

        // Body (Raleway)
        "body-lg": ["18px", { lineHeight: "150%", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "150%", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "150%", fontWeight: "400" }],
        "body-xs": ["12px", { lineHeight: "150%", fontWeight: "400" }],

        // Buttons (Poppins, texto siempre UPPERCASE en clase utilitaria)
        "btn-lg": ["16px", { fontWeight: "600" }],
        "btn-sm": ["14px", { fontWeight: "600" }],
      },

      spacing: {
        1:  "4px",
        2:  "8px",
        3:  "12px",
        4:  "16px",
        6:  "24px",
        8:  "32px",
        10: "40px",
        16: "64px",
        30: "120px", // desktop margin
      },

      boxShadow: {
        card:      "0 8px 24px #0000001a",
        "card-dark":"0 8px 24px #00000066",
      },

      lumina: {
        layout: {
          mobile:  { columns: 4,  gutter: "16px", margin: "16px",  width: "375px",  height: "812px"  },
          tablet:  { columns: 8,  gutter: "24px", margin: "32px",  width: "744px",  height: "1133px" },
          desktop: { columns: 12, gutter: "24px", margin: "120px", width: "1440px", height: "1024px" },
        },
        icons: { sm: "16px", md: "24px", lg: "32px", xl: "48px" },
      },
    },
  },

  plugins: [],
};