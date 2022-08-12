export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
    // ...做一些其他的应用级别的优化
    if (isServer) {
        Vue.mixin({
            mounted() {
                import('hi-kits').then(function (m) {
                    Vue.prototype.m = m;
                    // Vue.use(m)
                })
            }
        })
    } else {
        import('hi-kits').then(function (m) {
            Vue.prototype.m = m;
            // Vue.use(m)
        })
    }
}