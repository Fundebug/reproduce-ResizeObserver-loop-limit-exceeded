// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'

// //样式文件，需单独引入
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Element)

window.onerror = function(message, source, lineno, colno, error){
  console.error(message, source, lineno, colno, error)
}

// var fundebug=require("fundebug-javascript")
// fundebug.apikey="39dc6f70c775b4c4e08d304b8918ecec16b354635f1f5567864ce324e50d6816"
// fundebug.silentBehavior = true
// fundebug.silentHttp = true
// fundebug.silentResource = true
// fundebug.silentConsole = true

// function formatComponentName(vm)
// {
//   if (vm.$root === vm) return 'root';

//   var name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name;
//   return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '');

// }

// Vue.config.errorHandler = function(err, vm, info)
// {
//   var componentName = formatComponentName(vm);
//   var propsData = vm.$options && vm.$options.propsData;

//   fundebug.notifyError(err,
//   {
//       metaData:
//       {
//           componentName: componentName,
//           propsData: propsData,
//           info: info
//       }
//    });
// };

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
