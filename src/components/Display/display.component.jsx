import { Component } from 'react';
import propTypes from 'prop-types';

class Display extends Component {
  constructor(props) {
    super(props);
    this.result = props.result;
  }

  render() {
    return (
      <div>{ this.result }</div>
    );
  }
}

Display.propTypes = {
  result: propTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
