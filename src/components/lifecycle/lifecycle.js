import React from 'react';

class LifecycleButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: 'Click Me',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        label: "You're a slowpoke!"
      });
    }, 5000);
  }

  render() {
    return (
      <button className="button" >{this.state.label}</button>
    );
  } 
};

export default LifecycleButton;
