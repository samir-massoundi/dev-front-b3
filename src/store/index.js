import { createStore } from 'vuex'

export default createStore({
  state: {
    peopleList: [],
    filteredPeopleList:[], 

 },
  mutations: {
      SET_PEOPLE_LIST: ( state, peopleList) =>
      {
          state.peopleList = peopleList;
      },
      SET_FILTERED_PEOPLE_LIST: ( state, filteredPeopleList) =>
      {
          state.filteredPeopleList = filteredPeopleList;
      },
      RESET_FILTERED: (state) => {
        state.filteredPeopleList = state.peopleList;
      },
      REPLACE_PERSON:(state) => (person) =>
      {
        state.peopleList.splice(person.id, 1, person);
      } 
  },
  getters:
  {
    getPersonById: (state) => (id) =>
    {
        return state.peopleList.find(peopleList =>peopleList.id === id );
    },
    getPersonCount: (state) => {
        return state.peopleList.length
    },
    getPeopleByFirstName: (state) => (input) => {
        return state.peopleList.filter( (item) =>
           {
            item.firstname.toUpperCase().includes(input.toUpperCase())
            }
        )
    },
    getGenderStats: (state) => (paramGender) =>
    {
        return state.peopleList.filter( (item) => {
            return item.gender.toUpperCase() == paramGender.toUpperCase()
        }).length;
    },
    getAnimalStats: (state) => (paramAnimal) =>
    {
        return state.peopleList.filter( (item) => {
            return item.preferences.favorite_pet.toUpperCase() == paramAnimal.toUpperCase()
        }).length;
    },


  },
  actions: {
    peopleListToStore (context) {
    let requestURL = 'https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7';    
    fetch(requestURL)
        .then((response) => response.json())
        .then((data) => {
            context.commit("SET_PEOPLE_LIST", data.people);
            context.commit("SET_FILTERED_PEOPLE_LIST", data.people);
        });
  },
},
  modules: {
  }
})
