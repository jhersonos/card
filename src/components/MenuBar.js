import React, { Component } from 'react';
import more from '../more.png';
import comment from '../comment.png';

class Menubar extends Component{    

    constructor(){
        super();
        this.state = [
            {
                relation:''
            }
        ]
        
        this.addCard = this.addCard.bind(this)
        this.addMessage = this.addMessage.bind(this)
    }

    addCard(){
        //const name = 'relation';
        this.setState = {
            relation: ''
        }        
        this.props.addCard(this.state)
    }
    addMessage(){
        this.props.addMessage()
    }

    render(){
        return (
            <div className="menu-bar">
                <div className="row">
                    <div className="col-md-6">
                        <div className="nav-button text-center">
                            <img src={more} onClick={ this.addCard }/>
                            <p>Add Card</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="nav-message text-center">
                            <img src={comment}  onClick={this.addMessage}/>
                            <p>Add message</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menubar;