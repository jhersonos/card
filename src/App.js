import React, {Component} from 'react';
import './App.css';
import Menubar from './components/MenuBar';
import Card from './components/Card';

class App extends Component{
  
  constructor(){
    super();
    
    this.state = {
      cards:[
        {
          relation:''
        }
      ]
    }
    this.addCard = this.addCard.bind(this)
  }
  
  addCard(card){
    
    this.setState({
      cards: [...this.state.cards, card]
    })
    
  }
  
  render(){    
    
    const card = this.state.cards.map((todo, i) => {
      return (
        <Card index={i} key={i}/>
      )
    })
    
    return (
      <div className="App">
        <div className="body-app">
          <Menubar addCard={ this.addCard }/>
          { card }
        </div>      
      </div>
    );

  }  


}

export default App;
