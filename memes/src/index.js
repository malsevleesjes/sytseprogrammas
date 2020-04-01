// import React and ReactDOM libraries
import React from'react';
import ReactDOM from 'react-dom';

// Create a react cmponent
const App = () => {
  const ButtonText = { text: 'please click me!'};
  const labelText = 'Enter something:'
  return (
   <div>
    <label className="label" htmlFor="name">
    {labelText}
    </label>
    <input id="name" type="text" />
    <button style={{backgroundColor: 'pink', color: 'purpel'}}>
    {ButtonText.text}
    </button>
 </div>
);
};
// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
