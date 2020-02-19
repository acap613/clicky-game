//Start with dependencies
import React, {Component} from 'react';
import Card from './Components/Card/Card';
import Wrapper from './Components/Wrapper/Wrapper';
import Score from './Components/Score/Score';
//import Header from './Components/Header';
import toons from './pics.json'
import './App.css';
// import { render } from '@testing-library/react';


class App extends Component {

  //Need to set the state to the image array (pics.json)
  state = {
    toons,
    clickedIds: [],
    score: 0,
    goal: 12,
    status: "",
  };

  //include a shuffle function
  //needs to do 2 things: 1.) save the state of a card when its been clicked so its ID counts towards a score
  //2.) rearrange the IDs so that they randomly affix themselves to new positions in the Wrapper
  shuffleCards = id => {
    let clickedIds = this.state.clickedIds;
    //condition for losing
    if(clickedIds.includes(id)){
      
      this.setState({ clickedIds: [], score: 0, status:  "You already clicked that one! Click to try again..." });
      return;
    } else {
      //here is our first requirement: save state of IDs clicked
      clickedIds.push(id);
      //condition for winning
      if(clickedIds.length === 12){
        this.setState({score: 12, status: "You Won! Click to play again!", clickedIds: []});
        console.log('You Win');
        return;
      };
      //otherwise add the score up and shuffle
      this.setState({ toons, clickedIds, score: clickedIds.length, status: " " });

      for (let i = toons.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [toons[i], toons[j]] = [toons[j], toons[i]];
      }
    }
  }

  render() {
    return (
      <div id="app">
        <header id="header">
          <h1 id="title">Smash-Click-Pic!</h1>
          <p id="intro">Welcome to the Smash-Click-Pic guessing game! Try not to click the same pic twice!</p>
        </header>
        <Score total ={this.state.score}
               goal = {12}
               status = {this.state.status}
               />
        <Wrapper>
          {this.state.toons.map(character => (
            <Card
              shuffleCards={this.shuffleCards}
              id={character.id}
              key={character.id}
              image={character.image} />
          ))}
        </Wrapper>
        <footer><small>by Angelo Capozzi</small></footer>
        
      </div>
    )
  }

}


export default App;
