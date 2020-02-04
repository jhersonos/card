import React, { Component } from 'react';
import bin from '../assets/bin.png';

class Message extends Component{
    constructor(){
        super();
        this.removeMessage = this.removeMessage.bind(this)
    }
    removeMessage(){
        this.props.removeMessage();
    }
    render(){
        return(
            <div className="messageCard" style={{ top:  this.props.position }}>
                <div className="controlMessage">
                    <img src={bin} onClick={this.removeMessage}/>
                </div>
                <textarea className="form-control" placeholder="Ingrese mensaje">                    
                </textarea>
            </div>
        );
    }
}

export default Message;