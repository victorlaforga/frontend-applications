import React from 'react';
import '../App.css';
import '../index.css';
import refreshButton from '../images/refresh2.png'


class Bovenkant extends React.Component {
  state = {
    newObject: '',
  
  }
  onClickButtonBovenkant = (RandomObject) => {
    this.setState({
      text: {RandomObject},
      
    });
  }
  render() {
    const RandomObject = this.props.info[Math.floor(Math.random() * 
      this.props.info.length)];
      
  return <div className="voorwerp"> 
  <h1>Bovenkant kleding</h1>
  <p>{RandomObject.title.value}</p>
  <img src={RandomObject.pic.value} alt="random kledingstuk"/>
  <button onClick={this.onClickButtonBovenkant}><img onClick={this.onClickButtonBovenkant} src={refreshButton} alt=""/></button>
  
  </div>
  }
}



 

  export default Bovenkant;