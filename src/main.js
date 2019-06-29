// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Axios from 'axios';

import Vuex from 'vuex';


import {
	Form,
	FormItem,
	input,
	select,
	option,
	badge,
	button
} from 'element-ui';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(input);
Vue.use(select);
Vue.use(option);
Vue.use(badge);
Vue.use(button);

//Vuex 模块
Vue.use(Vuex)


/*
状态 : 
  0-----不可用
  1-----空闲（可以被选）
  2-----已选待审状态
  3-----已选已审状态
*/
var store = new Vuex.Store({

	state: {
		data: {
			Mon: {
				timeDif1: { state: 0 },
				timeDif2: { state: 1 }
			},
			Tues: {
				timeDif1: { state: 0 },
				timeDif2: { state: 1 }
			},
			Wed: {
				timeDif1: { state: 0 },
				timeDif2: { state: 1 }
			},
			Thurs: {
				timeDif1: { state: 2 },
				timeDif2: { state: 1 }
			},
			Fri: {
				timeDif1: { state: 3 },
				timeDif2: { state: 0 }
			},
			Sat: {
				timeDif1: { state: 1 },
				timeDif2: { state: 1 }
			},
			Sun: {
				timeDif1: { state: 2 },
				timeDif2: { state: 1 }
			},
		}
	},
	mutations: {
		show(state) {
			console.log(state.msg2 + '----------=-=-=')
		}
	}
})

//使用Axios
Vue.prototype.$axios = Axios;

/* eslint-disable no-new */

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	if (config.method == 'post') {
		config.data = qs.stringify(config.data)
	}
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	return response;
}, function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});


/* Vue.component(button.name, button); */

import './assets/iconfont/iconfont.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>',
	store
})
