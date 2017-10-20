import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}


	render() {
		return (
			<div className="search-bar row">
        <form className="col">
          <input className="form-control" type="search"
            value = {this.state.term}
            onChange={event => this.onInputChange(event.target.value) } />
        </form>
			</div>
		);
	}

  onInputChange(term) {
    this.setState({term});
    this.props.onSeachTermChange(term);
  }
}

export default SearchBar;