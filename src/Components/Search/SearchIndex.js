import React from "react";
import { Input } from "reactstrap";

class SearchIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			things: [
				"pen",
				"marker",
				"eraser",
				"notebook",
				"pencil",
				"scissors",
				"highlighter",
				"stapler",
				"paper clip",
				"binder",
				"hole punch",
				"laminator",
				"laminating sheets",
				"protective sheets",
				"index cards",
			],
			searchTerm: "",
		};
	}

	searchFunction(e) {
		this.setState({ searchTerm: e.target.value });
	}

	render() {
		return (
			<div>
				<Input
					id="searchTerm"
					type="search"
					placeholder="Search Here"
					value={this.state.searchTerm}
					onChange={(e) => this.searchFunction(e)}
				/>
				<h3>
					Results:
					{this.state.things
						.filter((item) => item.includes(this.state.searchTerm))
						.map((product) => (
							<li>{product}</li>
						))}
				</h3>
			</div>
		);
	}
}

export default SearchIndex;
