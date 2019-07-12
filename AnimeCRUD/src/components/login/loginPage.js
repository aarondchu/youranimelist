import * as React from "react";
import { Input } from "../common/input";
import { LoginForm } from "./loginForm";
import { Link } from "react-router-dom"
import { validateFields, formatTestCase } from "../common/ruleValidation";
import { LoginApi } from "./loginApi";
import { updateUser } from "../../redux/actions";
import { connect } from "react-redux"

class LoginPageRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                userName: "",
                password: ""
            },
            error: {
                userName: "",
                password: ""
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
                default:
                    break;
            }
            tests.push(formatTestCase(form[field], field, rules, new Array()))
        }
        tests = validateFields(tests);
        let newErrMsgs = { ...this.state.error };
        let currentFieldTest = tests.find(test => test.field == fieldName);
        if (currentFieldTest.errMsg.length > 0 && currentFieldTest.value)
            newErrMsgs = { ...this.state.error, [fieldName]: currentFieldTest.errMsg[0] };
        else newErrMsgs = { ...this.state.error, [fieldName]: "" }
        this.setState({ ...this.state, isFormValid: tests.every(test => test.errMsg.length == 0), error: newErrMsgs })
    }
    onChange = (name, value) => {
        this.setState({ ...this.state, login: { ...this.state.login, [name]: value } }, () => this.validateForm(this.state.login, name));
    }
    onClick = () => {
        LoginApi.login(this.state.login)
            .then(res => {
                console.log("RES", res);
                if (res.Item.Message)
                    this.setState({ errorMessage: res.Item.Message })
                else {
                    this.props.updateUser({ userName: this.state.login.userName })
                    this.props.history.push("/home")
                }
            })
            .catch(err => console.warn("err", err))
    }
    render() {
        return (
            <React.Fragment>
                <div className="authentication-wrapper authentication-3">
                    <div className="authentication-inner row mx-0" style={{ height: "100vh" }}>
                        <LoginForm
                            error={this.state.error}
                            onChange={this.onChange}
                            login={this.state.login}
                            isFormValid={this.state.isFormValid}
                            errorMessage={this.state.errorMessage}
                            onClick={this.onClick}
                        />
                        <div className="d-none d-lg-flex col-lg-8 align-items-center ui-bg-cover ui-bg-overlay-container p-5" style={{ backgroundImage: `url("../../../img/login_bg.png")` }}>
                            <div className="ui-bg-overlay bg-dark opacity-50"></div>
                        </div>
                    </div >
                </div >
            </React.Fragment >
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: info => dispatch(updateUser(info))
    }
}
export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPageRedux);
