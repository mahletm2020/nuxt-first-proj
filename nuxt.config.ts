
// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@' : resolve(__dirname, './')
   },
   css: ['~/assets/style.css'],
   buildModules: ['@nuxtjs/tailwindcss']
})

get stack in config lost with css and tailwind  ands toped there pissed i wish i dont see u tmr u bich