import React from 'react';

class Ingredient extends React.Component {
  state = {
    open: false
  };

  handleToggleRecipe = () => this.setState({open: !this.state.open});

  render() {
    const { name, recipe } = this.props;

    return (
      <React.Fragment>
        <h6>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={this.handleToggleRecipe}>{name}</a>
        </h6>
        {this.state.open && (
          <p>{recipe}</p>
        )}
      </React.Fragment>
    )
  }
}

export default Ingredient;