import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
	/*change so that when the button is clicked, it called the scream method*/
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(
	<Button />,
  document.getElementById('root')
);