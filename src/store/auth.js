import firebase from 'firebase/app';

export default {
  actions: {
    // eslint-disable-next-line
    async login({ dispatch, commit }, { email, password }) {
      // eslint-disable-next-line
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    // eslint-disable-next-line
    async register({ dispatch, commit }, { email, password, name }) {
      // eslint-disable-next-line
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 100000,
          name,
        });
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit('clearInfo');
    },
  },
};
