import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import book from '@/components/booklib/book.vue'
import booklib from '@/components/booklib/booklib.vue'
import mybook from '@/components/booklib/mybook.vue'


import home from '@/components/home/home.vue'


export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			redirect: '/home'
		}, {
			path: '/book',
			redirect: '/book/booklib',
			component: book,
			children: [{
				path: 'booklib',
				component: booklib
			}, {
				path: 'mybook',
				component: mybook
			}]
		},
		{
			path: '/home',
			component: home
		}
	],
	linkActiveClass: 'active'
})
