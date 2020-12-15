<!--<template>-->
<!--    <div class="blog">-->
<!--        <h1 class="page-title">Article</h1>-->
<!--        <div class="main">-->
<!--            <div class="banner-container">-->
<!--                <img src="https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg" class="banner"-->
<!--                />-->
<!--            </div>-->


<!--            <h1 class="page-title article-title">{{ game.name }}</h1>-->
<!--            <div class="article-description" v-html="game.body"></div>-->
<!--            <div class="article-description" v-if="game.characteristic"-->
<!--                 v-html="game.characteristic.publisherRussia"></div>-->
<!--            <div class="article-description" v-if="game.characteristic"-->
<!--                 v-html="game.characteristic.publisherRussiaLink"></div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->
<!--<script lang="ts">-->
<!--    import {Component, Vue} from 'vue-property-decorator'-->
<!--    import {Getter, Mutation, State} from 'vuex-class'-->
<!--    import {Action} from "vuex-module-decorators";-->
<!--    import {inject} from "inversify-props";-->
<!--    import PhoneBookService from "@/service/phonebook/PhoneBookService";-->
<!--    import PhoneBookServiceI from "@/service/phonebook/PhoneBookServiceI";-->
<!--    import PhoneBookDto from "@/service/phonebook/PhoneBookDto";-->


<!--    @Component({provide: [PhoneBookService]})-->
<!--    export default class Article extends Vue {-->
<!--        @inject()-->
<!--        private _phoneBookService!: PhoneBookServiceI-->
<!--        @Getter-->
<!--        public workBookDto?: PhoneBookDto-->

<!--        created() {-->
<!--            const id = Number.parseInt(this.$route.params.id);-->
<!--            this.getGame(id)-->
<!--        }-->

<!--        @Action public async getGame(id: number): Promise<void> {-->
<!--            await this.$store.dispatch('setGame', await this._phoneBookService.getPhoneBook(id));-->
<!--        }-->
<!--        @Mutation public setGame(data: PhoneBookDto): void {-->
<!--            this.phoneBookDto = data-->
<!--        }-->
<!--    }-->
<!--</script>-->
<!--<style lang="scss" scoped>-->
<!--    .banner-container {-->
<!--        width: 100%;-->
<!--        display: flex;-->
<!--        justify-content: center;-->
<!--        padding: 0 2rem;-->

<!--        .banner {-->
<!--            width: 100%;-->
<!--            height: 30rem;-->
<!--            object-fit: cover;-->
<!--            display: block;-->
<!--        }-->
<!--    }-->

<!--    .article-title {-->
<!--        font-size: 22px;-->
<!--    }-->

<!--    .article-description {-->
<!--        width: 60rem;-->
<!--        font-size: 16px;-->
<!--        margin: auto;-->
<!--    }-->
<!--</style>-->
