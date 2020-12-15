import Vue from 'vue'
import Vuex from 'vuex'
import globalValues from '@/store/modules/globalValues'
import PhoneBookModule from '@/service/phonebook/PhoneBookModule'
import WorkBookModule from "@/service/workbook/WorkBookModule";

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        globalValues,
        PhoneBookModule,
        WorkBookModule
    }
})
export default store
