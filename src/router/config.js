import { lazy } from 'react'


const Config = [
	{
		path: "/login",
		component: lazy(() => import("@pages/login/login")),
		exact: true,
	},
	{
		path: '/',
		component: lazy(() => import("@components/layout/layout")),
		routes: [
			{
				path: '/',
				name: "首页",
				exact: true,
				component:  lazy(() => import("@pages/home/home")),
			},
			{
				path: '/home',
				name: "首页",
				exact: true,
				component: lazy(() => import("@pages/home/home")),
			},
			{
				path: '/article',
				name: "首页",
				exact: true,
				component: lazy(() => import("@pages/article/articleList/articleList")),
			},
			{
				path: '/article/:id',
				name: "首页",
				exact: true,
				component: lazy(() => import("@pages/article/articleDetail/articleDetail")),
			},
			{
				path: '/user',
				name: "首页",
				exact: true,
				component: lazy(() => import("@pages/user/user")),
			},
			{
				path: '/user',
				name: "首页",
				exact: true,
				component: lazy(() => import("@pages/user/user")),
			},
			{
				path: "*",
				component: lazy(() => import("@pages/404/404")),
				exact: true,
			},
		]
	},
];


export default Config;
