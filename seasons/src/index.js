 import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

// THIS IS THE ONLY TIME we do direckt assingment
// to this.state
this.state = { lat: null, errorMessage: '' };

window.navigator.geolocation.getCurrentPosition(
  (position) => {
    // we called setState!!!!
    this.setState({ lat: position.coords.latitude });
  },
  (err) => {
    this.setState({ errorMessage: err.message })
  }
);
}

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div> latitude: {this.state.lat}</div>
    }

    return <div>Loading plaese wait!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
;
