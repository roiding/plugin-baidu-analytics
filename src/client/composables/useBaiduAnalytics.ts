declare const dataLayer: any[]
declare const baiduTag: (...args: any[]) => void

declare global {
  interface Window {
    dataLayer?: typeof dataLayer
    baiduTag?: typeof baiduTag
  }
}

/**
 * Add bdtag.js to your site
 */
export const useBaiduAnalytics = (id: string): void => {
  // 避免重复添加
  if (window.dataLayer && window.baiduTag) {
    return
  }
  // 插入百度分析js
  const baiduScript = document.createElement('script')
  baiduScript.src = `https://hm.baidu.com/hm.js?${id}`
  baiduScript.async = true
  document.head.appendChild(baiduScript)

  // insert gtag snippet
  window.dataLayer = window.dataLayer || []
  // the gtag function must use `arguments` object to forward parameters
  window.baiduTag = function () {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments)
  }

  baiduTag('js', new Date())
  baiduTag('config', id)
}
