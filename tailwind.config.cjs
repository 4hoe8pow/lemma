/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                header: '#BF4906',
                'header-foreground': '#fff',
                link: '#F06418',
                primary: {
                    500: '#504C97',
                    600: '#464388',
                },
                'primary-foreground': '#fff',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        a: {
                            color: theme('colors.link'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
