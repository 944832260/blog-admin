import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { Router } from "react-router-dom";
import APP from "./router/router"
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
import createStore from './store/index'
const store = createStore();
// import {message} from "antd"
// message.config({
//   duration: 2,
// });
import 'antd/dist/antd.css';
import "@public/reset.scss"
// import "@http"

// 配置热更新
if (module.hot) {
	console.log("热更新");
	module.hot.accept(() => {
		ReactDom.render(
			<APP />,
			document.getElementById('root')
		)
	})
}


ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<APP />
		</Router>
	</Provider>,
	document.getElementById("mount")
);
