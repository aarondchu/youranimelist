import * as React from "react";
import { Input } from "../common/input";
import { RegisterForm } from "./registerForm";
import { Link } from "react-router-dom"
import { validateFields, formatTestCase } from "../common/ruleValidation";
import { RegisterApi } from "./registerApi";
import { setTimeout } from "timers";

export default class RegisterPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			register: {
				userName: "",
				password: "",
				passwordConfirm: "",
				email: "",
			},
			error: {
				userName: "",
				password: "",
				passwordConfirm: "",
				email: "",
			},
			isFormValid: false,
			errorMessage: ""
		}
	}
	validateForm = (form, fieldName) => {
		let tests = new Array();
		for (let field in form) {
			let rules = {};
			switch (field) {
				case "userName":
					rules = {
						minLength: 3,
						maxLength: 50
					}
					break;
				case "password":
					rules = {
						validPassword: true
					}
					break;
				case "email":
					rules = {
						minLength: 3,
						maxLength: 50,
						validEmail: true
					}
					break;
				default:
					break;
			}
			tests.push(formatTestCase(form[field], field, rules, new Array()))
		}
		tests = validateFields(tests);
		let newErrMsgs = { ...this.state.error };
		if (fieldName == "passwordConfirm") {
			if (this.state.register.password != this.state.register.passwordConfirm)
				newErrMsgs = { ...newErrMsgs, [fieldName]: "Passwords must match." }
			else newErrMsgs = { ...newErrMsgs, [fieldName]: "" }
		}
		else {
			let currentFieldTest = tests.find(test => test.field == fieldName);
			if (fieldName == "password") {
				if (this.state.register.password != this.state.register.passwordConfirm) {
					newErrMsgs = { ...newErrMsgs, passwordConfirm: "Passwords must match." }
				}
				else newErrMsgs = { ...newErrMsgs, passwordConfirm: "" }
			}
			if (currentFieldTest.errMsg.length > 0 && currentFieldTest.value)
				newErrMsgs = { ...newErrMsgs, [fieldName]: currentFieldTest.errMsg[0] };
			else newErrMsgs = { ...newErrMsgs, [fieldName]: "" }
		}
		this.setState({ ...this.state, isFormValid: tests.every(test => test.errMsg.length == 0), error: newErrMsgs })
	}
	onChange = (name, value) => {
		this.setState({ ...this.state, register: { ...this.state.register, [name]: value } }, () => this.validateForm(this.state.register, name));
	}
	onClick = () => {
		RegisterApi.register(this.state.register)
			.then(res => {
				console.log("RES", res);
				if (res.Item == "0") {
					this.props.history.push("/");
				}
				else this.setState({ errorMessage: res.Item })
			})
			.catch(err => console.warn("err", err))
	}
	render() {
		return (
			<React.Fragment>
				<div className="authentication-wrapper authentication-3">
					<div className="authentication-inner row mx-0" style={{ height: "100vh" }}>
						<div className="d-none d-lg-flex col-lg-8 align-items-center ui-bg-cover ui-bg-overlay-container p-5" style={{ backgroundImage: `url("../../../img/register_bg.jpg")` }}>
							<div className="ui-bg-overlay bg-dark opacity-50"></div>
						</div>
						<RegisterForm
							error={this.state.error}
							onChange={this.onChange}
							register={this.state.register}
							isFormValid={this.state.isFormValid}
							errorMessage={this.state.errorMessage}
							onClick={this.onClick}
						/>
					</div >
				</div >
			</React.Fragment >
		)
	}
}
