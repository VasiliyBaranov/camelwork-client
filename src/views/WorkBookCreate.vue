<style lang="css">
    @import "~medium-editor/dist/css/medium-editor.css";
    @import "~vuejs-medium-editor/src/themes/default.css";
    @import "./default.css";
    @import '~highlight.js/styles/github.css';
    @import '~highlight.js/styles/ocean.css';

</style>
<template>
    <div class="phoneBookEdit">
        <h1 class="page-title">Добавьте место работы</h1>
        <div class="form-container">
            <el-form label-position="top" :model="workBookDto">
                <el-form-item label="Имя">
                    <el-input type="textarea" v-model="formData.firstName"></el-input>
                </el-form-item>

                <el-form-item label="Фамилия">
                    <el-input type="textarea" v-model="formData.lastName"></el-input>
                </el-form-item>

                <el-form-item label="Адрес работы">
                    <el-input type="textarea" v-model="formData.addressWork"></el-input>
                </el-form-item>

                <el-form-item label="Место работы">
                    <el-input type="textarea"  v-model="formData.placeWork"></el-input>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="addWorkBookForm()">Добавить</el-button>
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
    import WorkBookDto from "@/service/workbook/WorkBookDto";

    const workBookModule = namespace('WorkBookModule')
    @Component
    export default class PhoneBookEdit extends Vue {
        public isNew?: boolean = true
        public postId = 0

        public formData: WorkBookDto = {
            id:             0,
            firstName:      "",
            lastName:       "",
            addressWork:    "",
            placeWork:          ""
        }
        @workBookModule.State
        public workBookDto?: WorkBookDto


        @workBookModule.Action
        public addWorkBook!: (data: WorkBookDto) => void

        @workBookModule.Action
        public deleteWorkBook!: (data: number) => void


        public async addWorkBookForm(): Promise<void> {
            this.addWorkBook(this.formData)
        }



        protected async created() {
            // this.postId = +this.$route.params.id
            // if (!this.postId) {
            //     this.getPhoneBook()
            // } else {
            //     this.isNew = false
            //     this.pageTitle = 'Modify Article'
            //     // if(this.workBookDto != undefined)
            //     //     this.addPhoneBook(this.workBookDto);
            //     //await this.$store.dispatch('setPhoneBook', await this._phoneBookService.addPhoneBook(this.formData));
            // }
            //this.getGame(this.$route.params.id)
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
