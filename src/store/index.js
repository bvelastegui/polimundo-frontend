import Vue from 'vue'
import Vuex, {createLogger} from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [
        createLogger()
    ]
})

export default store