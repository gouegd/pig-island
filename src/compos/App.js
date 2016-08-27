import React, { PropTypes, Component } from 'react';
import { nextOf } from '../constants';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      next: nextOf[1]
    };
  }

  choose(choice) {
    this.setState({
      id: choice,
      next: nextOf[choice]
    });
  }

  render() {
    const { id, next } = this.state;
    return (
      <div>
        <img src={ `${id}.jpg` } alt={ id } style={ { maxHeight: '90vh' } } />
        { next.map(item =>
          <button onClick={ () => this.choose(item) }>{item}</button>
        ) }
        { !next.length && <button onClick={ () => this.choose(1) }>Restart</button> }
      </div>
    );
  }
}

App.propTypes = {
  id: PropTypes.number.isRequired,
  next: PropTypes.array.isRequired,
};

export default App;
