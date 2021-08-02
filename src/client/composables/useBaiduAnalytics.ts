export const useBaiduAnalytics = (id: string): void => {
  // insert gtag `<script>` tag
  const baiduScript = document.createElement('script')
  baiduScript.src = `https://hm.baidu.com/hm.js?${id}`
  baiduScript.async = true
  document.head.appendChild(baiduScript)

}
