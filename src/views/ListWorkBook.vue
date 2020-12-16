<template>
    <div class="home">
        <h1 class="page-title">Справочник «Телефонная книга»</h1>
        <div class="card-container">
            <div v-for="workBook in list" :key="workBook.id">
                <el-card :body-style="{ padding: '0px' }"  class="article">
                    <div class="title">
                        {{ workBook.lastName }} {{ workBook.firstName }} <br />
                        <span style="font-size: 16px">Адрес работы: {{ workBook.addressWork }}</span><br />
                        <span style="font-size: 16px">Место работы: {{ workBook.placeWork }}</span><br />
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    /* eslint-disable */
    import {Component, Vue} from 'vue-property-decorator'
    import 'reflect-metadata'
    import {namespace} from "vuex-class";
    import WorkBookDto from "@/service/workbook/WorkBookDto";

    const workBookModule = namespace('WorkBookModule')
    @Component
    export default class Home extends Vue {

        protected async mounted() {
            this.listWorkBook()
        }

        @workBookModule.State
        public list!: Array<WorkBookDto>

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
