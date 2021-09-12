import {reactive, onMounted, onBeforeUnmount} from 'vue'

export default function () {
    // 實現滑鼠游標點擊相關的資料
    let point = reactive({
        x: 0,
        y: 0
    })

    // 實現滑鼠游標點擊相關的方法
    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(event.pageX, event.pageY)
    }

    // 實現滑鼠游標點擊相關的生命週期鉤子
    onMounted(() => {
        console.log('onMounted')
        // window.addEventListener('click', (event) => {
        //     point.x = event.pageX
        //     point.y = event.pageY
        //     console.log(event.pageX, event.pageY)
        // })
        window.addEventListener('click', savePoint)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}
