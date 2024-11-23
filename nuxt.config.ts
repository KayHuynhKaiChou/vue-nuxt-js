import * as AntD from 'ant-design-vue'
import { addComponent } from '@nuxt/kit'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    async function (options, nuxt) {
      for (const key in AntD) {
        if (['version', 'install'].includes(key)) continue
        await addComponent({
          filePath: 'ant-design-vue',
          name: `A${key}`,
          export: key
        })
      }
    },
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL,
    }
  },
  devServer: {
    port: 4000, // Đổi cổng sang 4000
  },
})