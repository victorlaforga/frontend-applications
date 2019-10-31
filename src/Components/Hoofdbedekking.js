import React from 'react';
import '../App.css';
import '../index.css';



class Hoofdbedekking extends React.Component {
  
  render() {
  
const RandomObject = this.props.info[Math.floor(Math.random() * 
  this.props.info.length)];

    
  return <div className="voorwerp"> 
  <h1>Hoofdbedekking</h1>
  <p>{RandomObject.title.value}</p>
  <img src={RandomObject.pic.value} alt=""/>
  </div>
  }
}



 

  export default Hoofdbedekking;