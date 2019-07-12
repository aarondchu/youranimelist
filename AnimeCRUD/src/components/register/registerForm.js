import * as React from "react";
import { Input } from "../common/input";
import { Link } from "react-router-dom"


export const RegisterForm = (props) => {
	return (

		<div className="d-flex col-lg-4 align-items-center bg-dark p-5">
			<div className="d-flex col-sm-7 col-md-5 col-lg-12 px-0 px-xl-4 mx-auto">
				<div className="w-100">
					<h4 className="text-center text-lighter font-weight-normal mt-5 mb-0">Register a new YAL Account</h4>
					{props.errorMessage ? <div className="alert alert-danger alert-dismissible fade show my-3">{props.errorMessage}</div> : ''}
					<form className="form-group register-form">
						<Input
							type="text"
							onChange={props.onChange}
							name="userName"
							value={props.register.userName}
							placeholder="Enter your Username"
							error={props.error.userName}
						/>
						<Input
							type="email"
							onChange={props.onChange}
							name="email"
							value={props.register.email}
							placeholder="Enter your Email"
							error={props.error.email}
						/>
						<Input
							type="password"
							onChange={props.onChange}
							name="password"
							value={props.register.password}
							placeholder="Enter your Password"
							error={props.error.password}
						/>
						<Input
							type="password"
							onChange={props.onChange}
							name="passwordConfirm"
							value={props.register.passwordConfirm}
							placeholder="Please confirm your Password"
							error={props.error.passwordConfirm}
						/>
						<button
							type="button"
							className="btn btn-danger my-2 waves-effect"
							disabled={!props.isFormValid}
							onClick={props.onClick}
						>Register</button>
					</form>
					<div className="text-center text-muted mt-4">
						Already have an account yet?
                                    <Link to="/"><span style={{ color: "#d9534f" }}>  Login</span></Link>
					</div>

				</div>
			</div>
		</div>
	)
}