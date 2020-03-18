import * as React from "react";
import { connect } from 'react-redux'
import { UpdateUSER } from "@store/actions/user"
import { Input, Button, message } from "antd"
import "./login.scss"



class Login extends React.Component {
	state = {
		captcha: 0,
		loadingBtn: "",
		type: history.state && history.state.type ? history.state.type : "captcha",
		captchaUrl: "",
		form: {
			mobile: "",
			captcha: "",
			password: "",
			phone: "",
		}
	};
	render() {
		let { type, captcha, form, loadingBtn, captchaUrl } = this.state;

		return (
			<div id="login">
				<div className='logo'>
					<div className='logoLeft'>
						<span className='company'>我的博客</span>
						<span className='function'>海量日记</span>
					</div>
				</div>
				<div className='content'>
					<div className="back">
						<p>新纪元</p>
						<img src={require('./images/logoBack.png')} alt=""/>
					</div>
					<div className="form">
						<h1>博客登陆</h1>
						<div className="loginType">
							<div className="icon">
								<i className={`iconfont ${type === "captcha" ? "icon-User" : "icon-shouji"}`}
									 title={type === "captcha" ? "账号登录" : "手机验证码登录"}
									 onClick={() => {
									 	let now_type = type === "captcha" ? "password" : "captcha";
									 	if(now_type === "password") this.getCaptcha();
										 history.replaceState({type: now_type}, document.title, location.href);
										 this.setState({
											 type: now_type
										 })
									 }}/>
								<div className="mask"/>
							</div>
						</div>
						<div className="list">
							<Input
								name="mobile"
								className="mobile"
								placeholder="请输入账号"
								onChange={e => {
									type === "captcha" ? form.mobile = e.target.value : form.phone = e.target.value;
								}}
								prefix={<i className="iconfont icon-User" />}
							/>
						</div>
						<div className="list">
							<Input placeholder="请输入密码"
								type="password"
								onChange={e => {
									form.password = e.target.value;
								}}
								prefix={<i className="iconfont icon-User" />}
							/>
						</div> 
						<div className="list">
							<Button type="primary" block
								onClick={() => { this.login() }}>
								登录
            				</Button>
						</div>
					</div>
				</div>
				<div className='footer'>
					<div className='footerItem'>
						<div className='itemLeft'>
							<img src={require("./images/login1.png")} alt=""/>
						</div>
						<div className='itemRight'>
							<p>项目管理</p>
							<p>创业者的项目管理神器</p>
						</div>
					</div>
					<div className='footerItem'>
						<div className='itemLeft'>
							<img src={require("./images/login2.png")} alt=""/>
						</div>
						<div className='itemRight'>
							<p>文件存储</p>
							<p>海量云端存储空间</p>
						</div>
					</div>
					<div className='footerItem'>
						<div className='itemLeft'>
							<img src={require("./images/login3.png")} alt=""/>
						</div>
						<div className='itemRight'>
							<p>办公工具</p>
							<p>各类型办公工具</p>
						</div>
					</div>
					<div className='footerItem'>
						<div className='itemLeft'>
							<img src={require("./images/login4.png")} alt=""/>
						</div>
						<div className='itemRight'>
							<p>自动报告</p>
							<p>报周报自动生成</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		USER: state.USER
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// 更新数据
		UpdateUSER: (obj) => {
			dispatch(UpdateUSER(obj));
		}
	}
}


export default Login;
// export default connect(mapStateToProps, mapDispatchToProps)(Login);
