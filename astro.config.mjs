import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import { SITE_URL } from './src/consts.ts'
import partytown from '@astrojs/partytown'
import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
    site: SITE_URL,
    integrations: [
        expressiveCode(),
        mdx(),
        sitemap(),
        solidJs({
            include: '**.tsx',
        }),
        tailwind(),
        partytown({
            // Adds dataLayer.push as a forwarding-event.
            config: {
                forward: ['dataLayer.push'],
            },
        }),
    ],
    i18n: {
        defaultLocale: 'ja',
        locales: ['ja', 'en', 'fr', 'pt-br', 'es'],
    },
})
