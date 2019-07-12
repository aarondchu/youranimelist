import * as React from "react";
import apiExecute from "../common/apiExecute";
import axios from "axios";
import { HomeApi } from "./homeApi";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
	constructor() {
		super();
		this.state = {
			animes: [],
			page: 0,
			loading: false,
		}
	}
	onScroll = () => {
		if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && !this.state.loading) {
			this.setState({ loading: true }, () => this.loadNextPage());
		}
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", this.onScroll, false);
	}
	componentDidMount() {
		window.addEventListener("scroll", this.onScroll, false);
		HomeApi.getNews()
			.then(res => {
				document.getElementById("news").innerHTML = res.Item;
			})
			.catch(err => console.warn(err))
		HomeApi.getAnime(this.state.page)
			.then(res => this.setState({ animes: res.data }))
			.catch(err => console.warn(err))
	}
	loadNextPage = () => {
		this.setState({ page: this.state.page + 1 }, () => {
			HomeApi.getAnime(this.state.page)
				.then(res => {
					this.setState({ animes: this.state.animes.concat(res.data), loading: false }, () => console.log(res.data))
				})
				.catch(err => console.warn(err))
		})
	}
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid" style={{ paddingRight: "20rem", paddingTop: "4rem" }}>
					<div className="row" style={{ justifyContent: "center" }}>
						{this.state.animes && this.state.animes.map((anime, idx) =>
							<Link to={`/anime/${anime.id}`} className="card bg-dark anime-card" key={idx} style={{ width: "20rem" }}>
								<img className="card-img-top anime-image" src={anime.attributes.posterImage.large} />
								<div className="card-img-overlay anime-image-overlay" style={{ textOverflow: "ellipsis" }}>
									<h4 className="card-title">Synopsis</h4>
									<p className="card-text" style={{ height: "22rem", overflowY: "scroll" }}>{anime.attributes.synopsis}</p>
									<p className="card-text">{}</p>
								</div>
								<div className="card-body">
									<h3 className="card-title">{anime.attributes.titles.en || anime.attributes.titles.en_us || anime.attributes.titles.en_jp || anime.attributes.titles.ja_jp}</h3>
								</div>
							</Link>
						)}
					</div>
					<div className="row" style={{ justifyContent: "center" }}>
						{this.state.loading ? <div className="loader mb-3"></div> : <button className="btn btn-danger mb-3 waves-effect" type="button" onClick={this.loadNextPage}>Load More...</button>}
					</div>
				</div>
			</React.Fragment >
		)
	}
}