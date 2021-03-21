import { createStore } from 'vuex'

export default createStore({
  state: {
    _peopleList: [], 
 },
  mutations: {
      SET_PEOPLE_LIST: ( state, _peopleList) =>
      {
          state._peopleList = _peopleList;
      }
  },
  getters:
  {
    getPersonById: (state) => (id) =>
    {
        return state._peopleList.find(_peopleList =>_peopleList.id === id );
    },
    getPersonCount: (state) => {
        return state._peopleList.length
    }
  },
  actions: {
    peopleListToStore (context) {
        let requestURL = 'https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7';
      fetch(requestURL)
        .then((response) => response.json())
        .then((data) => {
            context.commit("SET_PEOPLE_LIST", data.people);
        });
  },
},
  modules: {
  }
})


// const setPeopleListToStore = () =>{
//     let requestURL = 'https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7';
//   fetch(requestURL)
//     .then((response) => response.json())
//     .then((data) => {
//         $store.commit("SET_PEOPLE_LIST", data.people);
//     });


// }

// setPeopleListToStore();