import React, {useState} from 'react';
import '../App.css';
import '../index.css';

class Bovenkant extends React.Component {
  
  render() {
    // const Title = () => {
    //   const [title, setTitle] = useState("Click here");}
    const RandomObject = this.props.info[Math.floor(Math.random() * 
      this.props.info.length)];
    
      
      
  return <div className="voorwerp"> 
  <h1>Bovenkant kleding</h1>
  <p>{RandomObject.title.value}</p>
  <img src={RandomObject.pic.value} alt=""/>
  <button>Verander kledingstuk</button>
  {/* <h1 onClick={() => setTitle("New title")}>{title}</h1> */}
  </div>
  }
}



 

  export default Bovenkant;