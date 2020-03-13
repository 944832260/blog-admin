import { lazy } from 'react'
import Home from '../components/home/home'


const Config = [
	{
		path: "/login",
		component: lazy(() => import("@components/login/login")),
		exact: true,
	},
	{
		path: '/',
		component: Home,
		routesLeft: [
			{
				path: '/',
				name: "首页",
				exact: true,
				component: Home,
			},
			{
				path: '/home',
				name: "首页",
				exact: true,
				component: Home,
			}
		]
	},
	{
		path: "*",
		component: Home,
		exact: true,
	},
];


export default Config;
