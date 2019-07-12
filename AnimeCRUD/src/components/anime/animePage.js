import * as React from "react";
import { AnimeApi } from "./animeApi";

export default class AnimePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			anime: {},
			id: props.match.params.id
		}
	}
	componentDidMount() {
		AnimeApi.getInfo(this.state.id)
			.then(res => {
				this.setState({ anime: res.data })
			})
			.catch(err => toastr.error(err))
	}
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid" style={{ paddingRight: "20rem", paddingTop: "4rem" }}>
					{this.state.anime.id &&
						<div style={{ backgroundImage: `url(${this.state.anime.attributes.coverImage.large})`, height: "30rem" }}>
							<img src={this.state.anime.attributes.posterImage.small} />
						</div>
					}
				</div>
			</React.Fragment>
		)
	}
}