import * as React from "react";

const onChange = (props) => (e) => {
	props.onChange(e.target.name, e.target.value)
}
export const Input = (props) => (
	<React.Fragment>
		<label htmlFor={props.name}>{props.label}</label>
		<input
			name={props.name}
			type={props.type}
			placeholder={props.placeholder}
			onChange={onChange(props)}
			value={props.value}
			className={
				props.className ?
					props.className + "form-control is-invalid" :
					"form-control is-invalid"
			}
		/>
		<div className="invalid-feedback small">{props.error}</div>
	</React.Fragment>
)