import type { Plugin, PluginObject } from '@vuepress/core'
import { logger, path } from '@vuepress/utils'

export interface BaiduAnalyticsPluginOptions {
  id: string
}

export const baiduAnalyticsPlugin =
  ({ id }: BaiduAnalyticsPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: 'vuepress-plugin-baidu-analytics',
    }

    if (!id) {
      logger.warn(`[${plugin.name}] 'id' is required`)
      return plugin
    }

    if (app.env.isDev) {
      return plugin
    }

    return {
      ...plugin,

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),

      define: {
        __BAIDU_ID__: id,
      },
    }
  }
