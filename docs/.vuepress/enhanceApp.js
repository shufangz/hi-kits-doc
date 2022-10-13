export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    router,
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
}