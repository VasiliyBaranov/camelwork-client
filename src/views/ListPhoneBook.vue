<template>
    <div class="home">
        <h1 class="page-title">Справочник «Телефонная книга»</h1>

        <div class="card-container">
            <div v-for="phoneBook in phoneBookList" :key="phoneBook.id">
                <el-card :body-style="{ padding: '0px' }"  class="article">
                    <div class="title">
                        {{ phoneBook.lastName }} {{ phoneBook.firstName }} <br />
                        <span style="font-size: 16px">Email: {{ phoneBook.email }}</span><br />
                        <span style="font-size: 16px">День-рождения: {{ phoneBook.birthDate }}</span><br />
                        <span style="font-size: 16px">Моб. телефон: {{ phoneBook.mobilePhone }}</span><br />
                        <span style="font-size: 16px">Рабочий телефон: {{ phoneBook.workPhone }}</span><br />
                        <span style="font-size: 16px">Работа: {{ phoneBook.work }}</span><br />
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
    import PhoneBookDto from "@/service/phonebook/PhoneBookDto";

    const phoneBookModule = namespace('PhoneBookModule')
    @Component
    export default class ListPhoneBook extends Vue {
        protected async mounted() {
            this.listPhoneBook()
        }
        @phoneBookModule.State
        public phoneBookList!: Array<PhoneBookDto>

        @phoneBookModule.Action
        public listPhoneBook!: () => Promise<Array<PhoneBookDto>>

    }
</script>
<style lang="scss" scoped>
    a {
        text-decoration: none;
        font-style: none;
    }
</style>
