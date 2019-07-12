import apiExecute from "../common/apiExecute";

const login = (data) => {
	return apiExecute("/api/logins", "POST", data);
}

export const LoginApi = {
	login
}