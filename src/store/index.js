import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';
import search from '@/store/modules/search';
import flights from '@/store/modules/flights';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    search,
    flights,
  },
  plugins: [
    createLogger(),
  ],
});

export default store;
