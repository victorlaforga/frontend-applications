import React from "react";
import "../App.css";
import "../index.css";
import refreshButton from "../images/refresh2.png";

class Hoofdbedekking extends React.Component {
  state = {
    newObject: ""
  };
  onClickButtonBovenkant = RandomObject => {
    this.setState({
      text: { RandomObject }
    });
  };
  render() {
    const RandomObject = this.props.info[
      Math.floor(Math.random() * this.props.info.length)
    ];

    return (
      <div className="voorwerp">
        <h1>Hoofdbedekking</h1>
        <p>{RandomObject.title.value}</p>
        <img src={RandomObject.pic.value} alt="" />
        <button onClick={this.onClickButtonBovenkant}>
          <img src={refreshButton} alt="" />
        </button>
      </div>
    );
  }
}

export default Hoofdbedekking;
