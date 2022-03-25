import Vue from 'vue'
import Vuex, {createLogger} from 'vuex'
import search from "./modules/search";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        search
    },
    plugins: [
        createLogger()
    ]
})

export default store