import * as React from "react";
import { Input } from "../common/input";
import { Link } from "react-router-dom"


export const LoginForm = (props) => {
	return (

		<div className="d-flex col-lg-4 align-items-center bg-dark p-5">
			<div className="d-flex col-sm-7 col-md-5 col-lg-12 px-0 px-xl-4 mx-auto">
				<div className="w-100">
					<h4 className="text-center text-lighter font-weight-normal mt-5 mb-0">Log in to your YAL Account</h4>
					{props.errorMessage ? <div className="alert alert-danger alert-dismissible fade show my-3">{props.errorMessage}</div> : ''}
					<form className="form-group login-form">
						<Input
							type="text"
							onChange={props.onChange}
							name="userName"
							value={props.login.userName}
							placeholder="Enter your Username"
							error={props.error.userName}
						/>
						<Input
							type="password"
							onChange={props.onChange}
							name="password"
							value={props.login.password}
							placeholder="Enter your Password"
							error={props.error.password}
						/>
						<button
							type="button"
							className="btn btn-danger my-2 waves-effect"
							disabled={!props.isFormValid}
							onClick={props.onClick}
						>Login</button>
					</form>
					<div className="text-center text-muted">
						<Link to="/forgotpassword"><span style={{ color: "#d9534f" }}>Forgot Password?</span></Link>
					</div>
					<div className="text-center text-muted mt-4">
						Don't have an account yet?
                                    <Link to="/register"><span style={{ color: "#d9534f" }}>  Register</span></Link>
					</div>

				</div>
			</div>
		</div>
	)
}