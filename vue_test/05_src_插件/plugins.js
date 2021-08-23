export default {
    install(Vue, x, y, z) {
        console.log(`install, Vue: ${Vue}, x: ${x}, y: ${y}, z:${z}`)
        // 定義過濾器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        // 定義全局指令
        Vue.directive('fbind2', {
            //指令與元素成功綁定時 (一上来)
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素被插入頁面時
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在的模板被重新解析時
            update(element, binding) {
                element.value = binding.value
            }
        })

        // 定義混合
        Vue.mixin({
            data() {
                return {
                    x: 123,
                    y: 456
                }
            }
        })

        // 給 Vue 原型上增加一個方法 (vm 和 vc 就都能用了)
        Vue.prototype.hello = () => {alert('Hello')}
    },
}
