import apiExecute from "../common/apiExecute";

const register = (data) => {
	return apiExecute("/api/registers", "POST", data);
}

export const RegisterApi = {
	register
}