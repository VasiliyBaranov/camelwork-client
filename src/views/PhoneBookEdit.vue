<style lang="css">
    @import "~medium-editor/dist/css/medium-editor.css";
    @import "~vuejs-medium-editor/src/themes/default.css";
    @import "./default.css";
    @import '~highlight.js/styles/github.css';
    @import '~highlight.js/styles/ocean.css';

</style>
<template>
    <div class="phoneBookEdit">
        <h1 class="page-title">Заполните карточку телефонной книги</h1>
        <div class="form-container">
            <el-form label-position="top" :model="phoneBookDto">
                <el-form-item label="Имя">
                    <el-input type="textarea" v-model="phoneBookDto.firstName"></el-input>
                </el-form-item>

                <el-form-item label="Фамилия">
                    <el-input type="textarea" v-model="phoneBookDto.lastName"></el-input>
                </el-form-item>

                <el-form-item label="Email">
                    <el-input type="textarea" v-model="phoneBookDto.email"></el-input>
                </el-form-item>

                <el-form-item label="День рождения">
                    <el-input type="textarea" v-model="phoneBookDto.birthDate"></el-input>
                </el-form-item>

                <el-form-item label="Мобильный телефон">
                    <el-input type="textarea" v-model="phoneBookDto.mobilePhone"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="addForm()">Добавить</el-button>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm()">Отправить</el-button>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="deleteForm()">Очистить</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts">
    /* eslint-disable */
    import {Component, Vue} from 'vue-property-decorator'
    import {namespace} from 'vuex-class'
    import PhoneBookDto from "@/service/phonebook/PhoneBookDto";

    const phoneBookModule = namespace('PhoneBookModule')
    @Component
    export default class PhoneBookEdit extends Vue {
        public postId = 0

        @phoneBookModule.State
        public phoneBookDto!: PhoneBookDto


        @phoneBookModule.Action
        public getPhoneBook!: () => Promise<PhoneBookDto>

        @phoneBookModule.Action
        public sendData!: () => void

        @phoneBookModule.Action
        public addPhoneBook!: (data: PhoneBookDto) => void

        @phoneBookModule.Action
        public deletePhoneBook!: (data: number) => void


        public async addForm(): Promise<void> {
            if(this.phoneBookDto)
                this.addPhoneBook(this.phoneBookDto)
        }

        public async submitForm(): Promise<void> {
            this.sendData()
        }

        public async deleteForm(): Promise<void> {
            this.deletePhoneBook(0);
        }

        protected created() {
            this.postId = +this.$route.params.id
            this.getPhoneBook()
        }
    }





</script>
<style lang="scss" scoped>
    .form-container {
        max-width: 80rem;
        padding: 4rem;
        margin: auto;
    }
    .el-button {
        width: 100%;
    }
</style>
