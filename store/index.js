export const state = () =>({
  counter : 0
});

export const mutations = {
    increment (state, data, d) {
      console.log('index_state', state);
      console.log(data);
      state.k1 =data
    }
};
