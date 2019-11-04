export const state = () =>({
  counter : 0
});

export const mutations = {
  ArticleDetail (state, data, d) {
      state.ArticleDetail = data
    },

  CommentList (state, data, d) {
    state.CommentList = data
  }
};
