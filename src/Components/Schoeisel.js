import React from 'react';
import '../App.css';
import '../index.css';

class Schoeisel extends React.Component {
  render() {
    const RandomObject = this.props.info[Math.floor(Math.random() * 
      this.props.info.length)];
    
  return <div className="voorwerp"> 
  <h1>Schoeisel</h1>
  <p>{RandomObject.title.value}</p>
  <img src={RandomObject.pic.value} alt=""/>
  </div>
  }
}



 

  export default Schoeisel;