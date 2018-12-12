import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {//arrow function helps in defining the 'this' keyword according to the class in which it it call else we can use this.name=this.name.bind(this) also to solve the problem if the arrow function is not defined
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
      // we do not put the () for function when ever we use callback function as if we put that then the funtion will be in=midiatly called as the render is shown.
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
