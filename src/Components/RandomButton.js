import React from 'react'
import '../App.css';
import '../index.css';

class RandomButton extends React.Component {
  

  handleClick = () => {
    this.setState({
      clicked: true, 
      data: this.props.info[Math.floor(Math.random() * 
this.props.info.length)]
    })
  }
  
  render() {
  return <div> 
  <button className="button">VERRAS ME!</button>
  <h1>{this.props.clicked ? this.props.info : ''}</h1>
  </div>
  }
}



 

  export default RandomButton;