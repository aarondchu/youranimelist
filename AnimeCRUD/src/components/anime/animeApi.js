import apiExecute from "../common/apiExecute";
import axios from "axios"

const getInfo = (id) => {
	return axios.get(`https://kitsu.io/api/edge/anime/${id}`)
		.then((response) => (response.data), (err) => {
			return (Promise.reject(err))
		});
}

export const AnimeApi = {
	getInfo
}