import { section1 } from '@/components';
import { createStore } from 'vuex'

export default createStore({
  state: {
    section1: null,
    section2: null,
    section3: null,
    section4: null,
    section5: null
  },
  getters: {
    getSection1: state=> state.section1,
    getSection5: (state)=>{
      return state.section5
    }
  },
  mutations: {
    assignSection: (state, payload)=>{
      switch(payload.name){
        case 'section1':
          state.section1 = payload.component
          break;
          case 'section2':
            state.section2 = payload.component
          break;
          case 'section3':
            state.section3 = payload.component
          break;
          case 'section4':
            state.section4 = payload.component
          break;
          case 'section5':
            state.section5 = payload.component
          break;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
