import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Element UI
import ElementUI from 'element-ui'
import '@/assets/styles/element.scss'
//styles
import '@/assets/styles/app.scss'
import "reflect-metadata";
import {container} from "inversify-props";
import MediumEditor from 'vuejs-medium-editor'
import PhoneBookServiceI from "@/service/phonebook/PhoneBookServiceI";
import PhoneBookService from "@/service/phonebook/PhoneBookService";
import WorkBookService from "@/service/workbook/WorkBookService";
import WorkBookServiceI from "@/service/workbook/WorkBookServiceI";

class AppBootstrap {
    constructor() {
        AppBootstrap.loadDependencyContainer()
        this.loadVueApp()
    }

    private static loadDependencyContainer(): void {
        container.addTransient<PhoneBookServiceI>(PhoneBookService)
        container.addTransient<WorkBookServiceI>(WorkBookService)
    }

    private loadVueApp(): void {
        Vue.use(ElementUI)
        Vue.component('medium-editor', MediumEditor)
        Vue.config.productionTip = true
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
}

new AppBootstrap()
