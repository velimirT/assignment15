import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ImagesList from './components/ImagesList';

class App extends Component {
  state = {
    images: [],
    score: 0
  }
  
  getImages = () => {
    var appToken = "5ca4cc46736d8daf4d46c8b4135d7bbab09ef7b026934d46a647e0d593eedab6";
    var imagesUrl = "https://api.unsplash.com/photos/random"
    return axios.get(imagesUrl, { params: { count:10 }, headers: { Authorization: `Client-ID ${appToken}` } });
  }

  shuffle = (i) => {
     var array = this.state.images;
     if(array[i].clicked === true){
       alert("Already clicked! Your High Score is: "+ this.state.score);
       this.setState({score:0})
     }else{
       array[i].clicked = true;
       this.setState({score: (this.state.score+1)})
     }
     var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({images:array})
  }

  componentDidMount(){
    var that = this;
    var imgs = this.getImages().then(function(data){
    var res = [];
      for(let i = 0; i < data.data.length; i++){
        res.push({thumb:data.data[i].urls.thumb, clicked:false})
      }
      that.setState({images:res})
      return res;
    });
//    this.setState({images:});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ImagesList images = {this.state.images} shuffle = {this.shuffle}/>
        </header>
      </div>
    );
  }
}

export default App;
