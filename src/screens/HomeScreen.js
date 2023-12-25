import React from 'react';
import "./HomeScreen.css"
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Requests';
import Row from '../Row';



function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav/>
      <Banner/>
      <Row
        title="Netflix Orignials/ Projects"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        />
      <Row
        title="Netflix Orignials/ Links/Social Network"
        fetchUrl={requests.fetchNetflixOriginals}
        
        />
      <Row
        title="Also watch"
        fetchUrl={requests.fetchNetflixOriginals}
        
        />
      <Row
        title="Also watch"
        fetchUrl={requests.fetchNetflixOriginals}
        
        />
      <Row
        title="Also watch"
        fetchUrl={requests.fetchNetflixOriginals}
        
        />
      <Row
        title="Also watch"
        fetchUrl={requests.fetchNetflixOriginals}
        
        />

      
    </div>
  );
}

export default HomeScreen