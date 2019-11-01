import React from "react";
import "./App.css";
import "./index.css";
import Hoofdbedekking from "../src/Components/Hoofdbedekking";
import logo from "../src/images/logo.png";
import Bovenkant from "../src/Components/Bovenkant";
import Onderkant from "../src/Components/Onderkant";
import Schoeisel from "./Components/Schoeisel";
import RandomButton from "./Components/RandomButton";

class App extends React.Component {
  state = {
    data: [],
    dataSchoeisel: [],
    dataBovenkant: [],
    dataOnderkant: []
  };
  componentDidMount() {
    const url =
      "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-16/sparql";

    const query = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?cho ?place ?placeRegio ?placeRegioName ?title ?pic WHERE {
?cho edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster1852> .
?cho dct:spatial ?place .
?cho dc:title ?title .
?cho edm:isShownBy ?pic .
?place skos:broader ?placeRegio .
?placeRegio skos:prefLabel ?placeRegioName .
} LIMIT 50
`;
    const querySchoeisel = ` 
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?cho ?place ?placeRegio ?placeRegioName ?title ?pic WHERE {
?cho edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2709> .
?cho dct:spatial ?place .
?cho dc:title ?title .
?cho edm:isShownBy ?pic .
?place skos:broader ?placeRegio .
?placeRegio skos:prefLabel ?placeRegioName .
} LIMIT 30

`;

    const queryBovenkant = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?cho ?place ?placeRegio ?placeRegioName ?title ?pic WHERE {
?cho edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2093> .
?cho dct:spatial ?place .
?cho dc:title ?title .
?cho edm:isShownBy ?pic .
?place skos:broader ?placeRegio .
?placeRegio skos:prefLabel ?placeRegioName .
} LIMIT 200
`;

    const queryOnderkant = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?cho ?place ?placeRegio ?placeRegioName ?title ?pic WHERE {
?cho edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2706> .
?cho dct:spatial ?place .
?cho dc:title ?title .
?cho edm:isShownBy ?pic .
?place skos:broader ?placeRegio .
?placeRegio skos:prefLabel ?placeRegioName .
} LIMIT 200
`;

    const runQuery = (url, query) => {
      // Call the url with the query attached, output data
      fetch(url + "?query=" + encodeURIComponent(query) + "&format=json")
        .then(res => res.json())
        .then(json => {
          console.log(json);
          console.log(json.results.bindings);
          this.setState({ data: json.results.bindings });
        });
    };
    const runQuerySchoeisel = (url, querySchoeisel) => {
      fetch(
        url + "?query=" + encodeURIComponent(querySchoeisel) + "&format=json"
      )
        .then(res => res.json())
        .then(json => {
          console.log(json);
          console.log(json.results.bindings);
          this.setState({ dataSchoeisel: json.results.bindings });
        });
    };

    const runQueryBovenkant = (url, queryBovenkant) => {
      fetch(
        url + "?query=" + encodeURIComponent(queryBovenkant) + "&format=json"
      )
        .then(res => res.json())
        .then(json => {
          console.log(json);
          console.log(json.results.bindings);
          this.setState({ dataBovenkant: json.results.bindings });
        });
    };

    const runQueryOnderkant = (url, queryOnderkant) => {
      // Call the url with the query attached, output data
      fetch(
        url + "?query=" + encodeURIComponent(queryOnderkant) + "&format=json"
      )
        .then(res => res.json())
        .then(json => {
          console.log(json);
          console.log(json.results.bindings);
          this.setState({ dataOnderkant: json.results.bindings });
        });
    };
    runQuery(url, query);
    runQuerySchoeisel(url, querySchoeisel);
    runQueryBovenkant(url, queryBovenkant);
    runQueryOnderkant(url, queryOnderkant);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Inspiratie voor </h1>
          <img className="logo" src={logo} alt="" />
        </header>
        <RandomButton></RandomButton>
        {this.state.data.length > 0 ? (
          <Hoofdbedekking info={this.state.data} />
        ) : (
          "Loading..."
        )}
        {this.state.dataBovenkant.length > 0 ? (
          <Bovenkant info={this.state.dataBovenkant} />
        ) : (
          "Loading..."
        )}
        {this.state.dataOnderkant.length > 0 ? (
          <Onderkant info={this.state.dataOnderkant} />
        ) : (
          "Loading..."
        )}
        {this.state.dataSchoeisel.length > 0 ? (
          <Schoeisel info={this.state.dataSchoeisel} />
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

export default App;