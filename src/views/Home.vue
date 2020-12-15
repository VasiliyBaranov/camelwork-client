<template>
    <div class="home">
        <h1 class="page-title">Camel App</h1>
        <div class="card-container">
            <router-link
                    v-for="phoneBook in list"
                    :key="phoneBook.id"
                    :to="'/article/' + phoneBook.id"
            >
                <el-card :body-style="{ padding: '0px' }" class="article">
                    <div class="title">
                        Имя: {{ phoneBook.firstName }}<br>
                        <span style="font-size: 12px">{{ phoneBook.id }}</span>
                    </div>

                    <div class="title">
                        Фамилия: {{ phoneBook.lastName }}<br>
                        <span style="font-size: 12px">{{ phoneBook.id }}</span>
                    </div>
                </el-card>
            </router-link>
        </div>
    </div>
</template>
<script lang="ts">
    /* eslint-disable */
    import {Component, Vue} from 'vue-property-decorator'
    import 'reflect-metadata'
    import {namespace} from "vuex-class";

    const workBookModule = namespace('WorkBookModule')
    @Component
    export default class Home extends Vue {

        protected async mounted() {
            this.listWorkBook()
        }

        @workBookModule.State
        public list!: Array<object>

        @workBookModule.Action
        public listWorkBook!: () => void
    }
</script>
<style lang="scss" scoped>
    a {
        text-decoration: none;
        font-style: none;
    }
</style>
