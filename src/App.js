import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from './actions';

class App extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.fetchRecipe();
  };

  render() {
    let { taco, loading } = this.props;
    let tacoIngredients;

    if (taco) {
      tacoIngredients = Object.values(taco).map(ingredient => ingredient.name);
    }

    let buttonContent;
    if (loading) {
      buttonContent = <div className="loader"/>;
    } else {
      buttonContent = `Taco me${taco ? ' again' : ''}!`;
    }

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-content-wrapper">
            <p>Get a random taco</p>
            <div>
              <button onClick={this.handleClick}>
                {buttonContent}
              </button>
            </div>
            <ul>
            {tacoIngredients && tacoIngredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taco: state.taco,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipe: query => dispatch(fetchAction(query))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
