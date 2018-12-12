import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // prototypal inheritance is used bassically in react
  /*
  State:
  1. Only usable with class components
  2. don't get confused with props when we understand state.
  3. State in JS object that contais data relevent to a component.
  4. Updating 'State' on a component causes the component to almost instantly rerender
  5. state must be initialise when a component is created.
  6. sate can only be updated using the function ''
  */
  state = { lat: null, errorMessage: '' };//this is the other way to initialize state apart from constructor

/**
 * constructor(props){
 * super(props);//ref to constructorto parent component
 * //this is the only time we do direct assignment to state else will ahve use setState
 * this.state={lat=null};
 * }
 */


/**
 * so basically for the life cycle hook the component cycle goes like
 * 1.Constructor- good place to init the state or network request one-time setup
 * 2.render-will be called many time as our dom component changes or triggers event.
 * then the content will be visible on the screen
 * 3.componentDidMount- good place to load data(initial data loading).
 * sit and wait for the updates
 * 4.component DidUpdate-good place to do more data loading when state/props change
 * sit and update until this componet is no longer shown
 * 5.component will unmount-good place to clean up (especially for non -React stuff)
 * 
 * other life cycle methods which re very rarely used
 * 6.shouldComponentUpdate
 * 7.getDerivedStateFromProps
 * 8.getSnapshotBeforeUpdate
 * 
 */

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }
// this is the must defined function for the class based component in React which will return some JSX


  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
