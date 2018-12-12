// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function nameFunction(){
  return "Click on me!";
}
// Create a react component
const App = () => {

  // we can easly reference variable inside of our JSX with {} single braces and we can also invoke the function if required
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';
// return should always return the one div with 
  return (
    <div>
    // when ever we move to class instead we use className
      <label className="label" htmlFor="name">
      // here we use htmlFor in place with for in html
        {labelText}
      </label>
      <input id="name" type="text" />
      // for style we use {{ }} after putting the style and with - we can replace with camelcase like background
      // one more thing is if we want to provide the extra value in style with , instead of ;
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
        // {nameFunction()}
      </button>
    </div>
  );
};
// user name changed
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
