import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Thumbnail from "./components/Thumbnail"
import { Container } from "./components/Grid";
import image from "./components/Images";
import shuffle from "./components/Helpers/shuffle";
// import checkArray from "./components/Helpers/checkArray"
import './App.css';

class App extends Component {
  state = {
    images: [],
    clicked: [],
    score: 0,
    topScore: 0,
    message:"Click an image to begin!"
  };
  componentDidMount() {
    this.loadImages(image);
  }
  
  loadImages = (images) => {
    this.setState({ images : images });
  };

  clicked= (id) => {
    let isClicked = this.state.clicked;
    if(isClicked.indexOf(id)>-1){
      this.setState({images:[], clicked:[],score:0, message: "You already clicked that one!"});
      this.loadImages(shuffle(image));
    }else{
      let clicked = isClicked;
      clicked.push(id);
    this.setState({ clicked: clicked, score: this.state.score +1 , message: "Good Job", images: shuffle(this.state.images)})
    if(this.state.score >= this.state.topScore){
      this.setState({topScore: this.state.topScore +1})
    }

  }
  };

  render() {
    return (
      <div>
        <Nav 
        msg={this.state.message}
        score={this.state.score}
        topScore={this.state.topScore}/>
        <Jumbotron />
        {this.state.images.length ? (
              <Container>
                {this.state.images.map(image => (
                      <Thumbnail 
              key={image.id}
              id={image.id}
              src={image.src}
              onClick={() => this.clicked(image.id)} />
              
            
            ))}
            </Container>):(
              <h3>No Results to Display</h3>
            )}
      </div>
    );
  }
}

export default App;
