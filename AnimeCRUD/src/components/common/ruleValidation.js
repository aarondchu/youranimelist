export const formatTestCase = (value, field, rules, error) => {
	return { value: value, field: field, rules: rules, errMsg: error }
}


export const validateFields = (tests) => {
	let checkedTests = tests.map(test => {
		for (let rule in test.rules) {
			switch (rule) {
				case "minLength":
					if (test.value.length < test.rules[rule])
						test.errMsg.push(`${test.value} is invalid. Must be at least ${test.rules[rule]} characters long`);
					break;
				case "maxLength":
					if (test.value.length > test.rules[rule])
						test.errMsg.push(`${test.value} is invalid. Must not be over ${test.rules[rule]} characters long`);
					break;
				case "validEmail":
					if (!test.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
						test.errMsg.push(`${test.value} is not a valid email.`);
					}
					break;
				case "validPassword":
					if (!test.value.match(/^(?=.*[0-9]).{6,}$/))
						//delete error message because you don't want to display what you're typing
						test.errMsg.push(`Password is invalid. Must be 6 character long and have 1 number`);
					break;
				case "validDropDown":
					if (test.value ? "" : !test.value)
						test.errMsg.push(`${test.value} in invalid. Please select an option.`)
					break;
				case "validDate":
					if (new Date(test.value) < new Date())
						test.errMsg.push("Please enter a valid date.(Can't enter a past date)")
					break;
				case "validTime":
					if (!test.value)
						test.errMsg.push("Please enter a time.")
					break;
				case "isNumber":
					if (test.value <= 0)
						test.errMsg.push("Please enter a valid numerical value higher than 0.")
					break;
				case "universal":
					if (!test.value)
						test.errMsg.push("Invalid.")
				case "validNumber":
					if (test.value === 0)
						test.errMsg.push("Please enter a number greater than 0.")
					break;
				case "minKeywordCount":
					if (test.value.length === 0)
						test.errMsg.push("Please enter at least one keyword.")
					break;
				case "confirmPassword":
					//test.rules['newPassword'] from validateFields in page that uses this rule, compare the test.value to this value
					if (test.value != test.rules['newPassword'])
						test.errMsg.push("Your passwords don't match.")
				default:
					break;
			}
		}
		return test;
	});
	return checkedTests;
}