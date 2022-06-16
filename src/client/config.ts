import { defineClientConfig } from '@vuepress/client'
import { useBaiduAnalytics } from './composables'

declare const __BAIDU_ID__: string

const id = __BAIDU_ID__

export default defineClientConfig({
  setup() {
    if (__VUEPRESS_SSR__) return

    useBaiduAnalytics(id)
  },
})
