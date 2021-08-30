<template>
    <div class="container">
        <category title="遊戲">
            <template scope="data">
                <ul>
                    <li v-for="(item, index) in data.games" :key="index">
                        {{ item }}
                    </li>
                </ul>
                <h4>{{ data.msg }}</h4>
                <br>
                {{ data }}
                <br>
            </template>
        </category>
        <category title="遊戲">
            <template scope="{games}">
                <ol>
                    <li v-for="(item, index) in games" :key="index">
                        {{ item }}
                    </li>
                </ol>
                {{ games }}
            </template>
        </category>
        <category title="遊戲">
            <template slot-scope="{games}">
                <h4 v-for="(item, index) in games" :key="index">
                    {{ item }}
                </h4>
            </template>
        </category>
    </div>
</template>

<script>
    import Category from "./components/Category";

    export default {
        name: "App",
        components: {Category},
        methods: {},
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-around;
    }

    .foot {
        display: flex;
        justify-content: space-around;
    }

    h4 {
        text-align: center;
    }
</style>