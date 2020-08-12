import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import VueSwal from "vue-swal";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueSwal);
NProgress.configure({ showSpinner: false });

Vue.config.productionTip = false;

const requireComponent = require.context(
  "./components/base",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
