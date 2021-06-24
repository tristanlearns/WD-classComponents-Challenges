import React, { Component } from "react";
import { Button } from "reactstrap";

class DogIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dogPicture: "",
		};
	}

	fetchDogs() {
		const apiUrl = `https://dog.ceo/api/breeds/image/random`;
		fetch(apiUrl)
			.then((res) => res.json())
			.then((results) => {
				this.setState({
					dogPicture: results.message,
				});
			})
			.catch((error) => console.log(error));
	}

	componentDidMount() {
		this.fetchDogs();
	}

	render() {
		return (
			<div>
				<Button onClick={() => this.fetchDogs()}>
					Show me a new dog, please.
				</Button>
				<hr />
				<p>
					<img alt={this.state.dogPicture} src={this.state.dogPicture}></img>
				</p>
			</div>
		);
	}
}

export default DogIndex;
