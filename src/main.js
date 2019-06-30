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
		},
		checkedArr: [] // 记录已经被选中时间的信息
	},
	mutations: {
		// 修改元素状态的函数，既元素选中之后的状态值
		changeState(state, obj) {
			state.data[obj.WeekDay][obj.interval].state = state.data[obj.WeekDay][obj.interval].state == 1 ? 5 : 1;
			let time = obj.interval == 'timeDif1' ? "08:10-11:10" : "14:00-17:00";
			var str = `week${obj.week}/${obj.WeekDay}/${time}`
			// 当状态值为 5 的时候，说明被选中了，将被选中的信息记录
			// 若状态值不为5， 则说明应将其从数组中 删去
			if (state.data[obj.WeekDay][obj.interval].state == 5) {
				state.checkedArr.push(str);
			} else {
				let index = state.checkedArr.indexOf(str);
				state.checkedArr.splice(index, 1)
			}
			console.log(state.checkedArr)
		},

		// 当点击时间戳上的小圆点是删除checkedArr中对应的元素
		delElOfCheckedArr(state, str) {
			let index = state.checkedArr.indexOf(str);
			state.checkedArr.splice(index, 1)
			// 将其状态值改为 1
			var reg = new RegExp(/(\/\w{3,5}\/)/);
			// 第几周
			var week = str.substr(4,1);
			// 周几
			var matchStr = str.match(reg)[0];
			var weekday = matchStr.substr(1,matchStr.length-2)
			// 时间段
			var interval = str.indexOf("08:10-11:10") == -1 ? "timeDif2" : "timeDif1";
			// console.log(interval)
			state.data[weekday][interval].state = 1;


		}
	},
	getters: {
		// checkdArr(state){
		// 	state.data.map((item,index)=>{

		// 	})
		// }
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
