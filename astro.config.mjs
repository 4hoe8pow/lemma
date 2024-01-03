import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'

import { SITE_URL } from './src/consts.ts'

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
        icon(),
    ],
    i18n: {
        defaultLocale: 'ja',
        locales: ['ja', 'en', 'fr', 'pt-br', 'es'],
    },
})
