import React, { Component } from 'react';

class Input extends Component{
    
    constructor(props){
        super(props);
        this.state = {                
            id:'',
            value: '',
            clone:''
        };
        this.addInput = this.addInput.bind(this)
        this.removeInput = this.removeInput.bind(this)
        this.cloneInput = this.cloneInput.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(e){        
        this.props.handleInput(e,this.props.datakey);
        console.log(this.props.datakey)
    }

    addInput(){
        this.props.addInput()
    }

    removeInput(){
        this.props.removeInput();
    }
  
   cloneInput(){
        this.props.cloneInput();
   }

    render(){
        return(
            <div className="input-box">
                <div className="controls">
                    <span id={this.props.id} className="cuar" onClick={this.addInput}>+</span>
                    
                    <span className="cuar" onClick={this.removeInput}> -</span>

                    <span className="cuar" onClick={this.cloneInput}> *</span>
                </div>
                <input value={this.props.value} datakey={this.props.datakey} type="text" name="value" onChange={this.handleInput} className="form-control" placeholder="Click here to edit" />
                
            
            </div>
        )
    }

}

export default Input;