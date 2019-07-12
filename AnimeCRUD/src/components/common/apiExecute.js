import axios from "axios";

const apiExecute = (url, httpType, data) => {
	let apiMap = {
		"POST": axios.post,
		"GET": axios.get,
		"PUT": axios.put,
		"DELETE": axios.delete
	}

	if (httpType === "POST" || httpType === "PUT")
		return apiMap[httpType](url, data, { withCredentials: true })
			.then((response) => (response.data), (err) => {
				return (Promise.reject(err))
			});

	return apiMap[httpType](url, { withCredentials: true })
		.then((response) => (response.data), (err) => {
			return (Promise.reject(err))
		});
};

export default apiExecute;