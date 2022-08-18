//官方元件
import Vue from 'vue'
import VueRouter from 'vue-router'

//自訂元件 @代表src這個路徑
import Login from '@/components/pages/Login' //src => components => pages => page
import Dashboard from '@/components/Dashboard'
import Products from '@/components/pages/Products'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '*',
			redirect: 'login'
		},
		
		{
			name: 'Login',			//元件呈現的名稱
			path: '/login',			//對應的虛擬路徑
			component: Login, //對應的元件
		},
		{
			name: 'Dashboard',			//元件呈現的名稱
			path: '/admin',			//對應的虛擬路徑
			component: Dashboard, //對應的元件
			children: [
				{
					path:'products',
					name:'Products',
					component: Products,
					meta: { requiresAuth: true },	
				}
			]
		},
		// {
		// 	//name: '分頁',			//元件呈現的名稱
		// 	path: '/page',			//對應的虛擬路徑
		// 	// component: Page, //對應的元件
		// 	components: {
		// 		default: Page,
		// 		menu: Menu,
		// 	},
		// 	children: [
		// 		{
		// 			name: '卡片1',			//元件呈現的名稱
		// 			path: '',			//對應的虛擬路徑
		// 			component: child, //對應的元件
		// 		},
		// 		{
		// 			name: '卡片2',			//元件呈現的名稱
		// 			path: 'child2',			//對應的虛擬路徑
		// 			component: child2, //對應的元件
		// 		},
		// 		{
		// 			name: '卡片3',			//元件呈現的名稱
		// 			path: 'child3',			//對應的虛擬路徑
		// 			component: child3, //對應的元件
		// 		},
		// 	]
		// }
	]
})

