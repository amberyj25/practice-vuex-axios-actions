import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);


export default new Vuex.Store({
  state: {
    rooms: "",
  },
  mutations: {
    hotelProducts(state, payload) {
      state.rooms = payload;
    }
  },
  actions: {
    a(context) {
      axios.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", {
        headers: {
          Authorization: "Bearer gXEmeg7d3PR517E9MXk9ApnsGVmHliQY1geCc0YbQMNTcsRvjEcDSf5RDSDd",
          accept: "application/json",
        }
      }).then(result => {
        console.log(result);
        context.commit("hotelProducts", result.data.items);
      })
    }
  }
})