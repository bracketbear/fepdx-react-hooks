import React from 'react';

class ClassButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render () {
    return (
      <button 
        className="button button__class" 
        onClick={this.incrementCount}>Count = {this.state.count}</button>
    );
  }
}

export default ClassButton;