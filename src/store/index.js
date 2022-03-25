import Vue from 'vue'
import Vuex, {createLogger} from 'vuex'
import search from "./modules/search";
import flights from "./modules/flights";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        search,
        flights
    },
    plugins: [
        createLogger()
    ]
})

export default store