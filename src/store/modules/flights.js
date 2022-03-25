/* eslint-disable no-shadow */
import flights from '../../../api/flights';

const state = () => ({
  items: [],
  loading: false,
});

const getters = {};

const actions = {
  async searchFlights({ commit }) {
    commit('loading', true);
    const data = await flights.find();
    commit('setItems', data);
    commit('loading', false);
  },

  clearItems({ commit }) {
    commit('setItems', []);
  },
};

const mutations = {
  setItems(state, data) {
    state.items = data;
  },
  loading(state, value) {
    state.loading = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
