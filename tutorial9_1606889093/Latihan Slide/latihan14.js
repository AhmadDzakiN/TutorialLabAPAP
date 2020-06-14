import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  //give constructor here
  //set this.state equal to this object: { color: green }
  constructor(props) {
    // Inside of the body of your constructor method, call super(props). 
    // On a new line, still inside the body of your constructor, declare a new property named this.state.
    super(props);
    this.state = {color : green}
    this.changeColor = this.changeColor.bind(this)
  }

  //give changeColor here
  //.changeColor() should set the state's color to yellow if it's currently green, and vice versa.
  changeColor() {
    if (this.state.color == green){
      this.setState ({color : yellow})
    }
    else {
      this.setState ({color : green})
    }
    

  }
  render() {
    return (
      <div style={{background:this.state.color}}>
        <h1>Change my color</h1>
        <button onClick = {this.changeColor}>
          Change my color
        </button>

      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('root'));

