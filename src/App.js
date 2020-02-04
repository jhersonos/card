import React, {Component} from 'react';
import './App.css';
import Menubar from './components/MenuBar';
import Card from './components/Card';
import Message from './components/Message'
class App extends Component{
  
  constructor(){
    super();
    
    this.state = {
      cards:[
        {
          relation:''
        }
      ],
      message:[
        {
          id : ''
        }
      ]
    }
    this.addCard = this.addCard.bind(this)
    this.addMessage = this.addMessage.bind(this)
  }
  
  addCard(card){
    
    this.setState({
      cards: [...this.state.cards, card]
    })  
  }

  addMessage(){
    const message = {
      id:this.state.message.length
    } 
    console.log(message)
    this.setState({
      message:[...this.state.message, message]
    })
  }
  removeMessage(index){
    this.setState({
      message: this.state.message.filter((e, i)=>{
            return i !== index 
        })
    })
  }
  
  render(){    
    
    const card = this.state.cards.map((todo, i) => {
      return (
        <Card index={i} key={i}/>
      )
    })
    let pos = 0;    
    const message = this.state.message.map((message, i)=>{
      pos += 130;
        return(<Message removeMessage={this.removeMessage.bind(this,i)} position={pos} key={i} id={i}/>)
      

    })

    return (
      <div className="App">
        <div className="body-app">
          <Menubar addMessage={this.addMessage} addCard={ this.addCard }/>
          { card }
          { message }
        </div>      
      </div>
    );

  }  


}

export default App;
