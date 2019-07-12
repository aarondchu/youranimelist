import axios from "axios"
import apiExecute from "../common/apiExecute";

const getAnime = (page) => {
	return axios.get("https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=16&page[offset]=" + (page * 16))
		.then((response) => (response.data), (err) => {
			return (Promise.reject(err))
		});
}
const getNews = () => {
	return apiExecute("/api/scraper", "GET");
}
export const HomeApi = {
	getAnime,
	getNews
}