import M from 'materialize-css';

export default {
  install(Vue) {
    // eslint-disable-next-line
    Vue.prototype.$message = function (html) {
      M.toast({ html });
    };
    // eslint-disable-next-line
    Vue.prototype.$error = function (html) {
      M.toast({ html: `[Ошибка]: ${html}` });
    };
  },
};
