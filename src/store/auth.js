import firebase from 'firebase/app';

export default {
  actions: {
    // eslint-disable-next-line
    async login({ dispatch, commit }, { email, password }) {
      // eslint-disable-next-line
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        throw e;
      }
    },
  },
};
