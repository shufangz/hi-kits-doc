/*
 * @Author: zengshufang zengshufang@haier.com
 * @Date: 2022-10-09 11:24:51
 * @LastEditors: zengshufang zengshufang@haier.com
 * @LastEditTime: 2023-01-30 20:10:17
 * @FilePath: /promotion_project_cluster/Users/zengshufang/Documents/hi-kits-doc/docs/.vuepress/theme/enhanceApp.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable no-proto */
import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { interceptRouterError, fixRouterError404 } from '@theme/helpers/other'

export default ({
  Vue,
  siteData,
  isServer,
  router
}) => {
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  // if (!isServer) {
  //   addScriptToHead('//kit.fontawesome.com/51b01de608.js')
  //   registerCodeThemeCss(siteData.themeConfig.codeTheme)
  // }
  if (isServer) {
    Vue.mixin({
        mounted() {
            import('hi-kits').then(function (m) {
                Vue.prototype.m = m;
                // Vue.use(m)
            })
            router.onReady(() => {
                const {
                    hash
                } = document.location;
                setTimeout(() => {
                    if (hash.length > 1) {
                        const id = decodeURIComponent(hash);
                        const el = document.querySelector(`.reco-side-${decodeURIComponent(id).substring(1)}`);
                        el.click();
                    }
                }, 1000);
            });
        }
    })
} else {
    import('hi-kits').then(function (m) {
        Vue.prototype.m = m;
        // Vue.use(m)
    })

    router.onReady(() => {
        const {
            hash
        } = document.location;
        setTimeout(() => {
            if (hash.length > 1) {
                const id = decodeURIComponent(hash);
                console.log(id);
                const el = document.querySelector(`.reco-side-${decodeURIComponent(id).substring(1)}`);
                el.click();
            }
        }, 1000);
    });
}
  interceptRouterError(router)
  fixRouterError404(router)
}
