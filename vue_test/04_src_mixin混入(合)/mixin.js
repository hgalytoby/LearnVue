export const mixinTest1 = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('來囉!')
    }
}

export const mixinTest2 = {
    data(){
        return {
            x: 123,
            y: 456
        }
    }
}