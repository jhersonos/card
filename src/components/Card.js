import React, {Component} from 'react';
import Input from './Input';


class Card extends Component{
    constructor(){
        super();
        this.state = {
            inputs:[
                {
                    id:0,
                    value: ''
                }
            ]
        }
        this.addInput = this.addInput.bind(this)
        this.removeInput = this.removeInput.bind(this)
        this.cloneInput = this.cloneInput.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    cloneInput(i){
        console.log("entro")
        const clone = {
            id: this.state.inputs.length + 1,
            value:this.state.inputs[i].value
        };
        console.log(clone)
        this.setState({
            inputs: [...this.state.inputs, clone]
        })
        console.log(this.state)
    }
    
    handleInput(e,i){
        
        const { datakey, name, value } = e.target;
        this.state.inputs[i] = {
            id:i,
            [name]: value
        }            
        
        console.log(this.state)
    }

    addInput(){
        const inputPush = {
            id : this.state.inputs.length,
            value:''
        }
        this.setState({
            inputs: [...this.state.inputs, inputPush]
        })
        console.log(this.state)
    }

    removeInput(index){
        if(window.confirm('Are you sure you want to delete it?')){
            this.setState({
                inputs: this.state.inputs.filter((e, i)=>{
                    return i !== index 
                })
            })
        }
    }
    render(){
        
        const input = this.state.inputs.map((input, i)=>{
            console.log(input)
            return(
                <Input value={input.value} id={i} datakey={i} key={i} handleInput={this.handleInput} addInput={this.addInput} removeInput={this.removeInput.bind(this,i)} cloneInput={this.cloneInput.bind(this,i)} />
            )
        })

        return(
            <div className="storyCard mt-2">
                <div className="headCard">
                    <input className="" type="checkbox"></input>
                    <label>                                    
                        Buttons
                    </label>
                </div>
                <div className="bodyCard">
                    <textarea className="form-control" placeholder="Hola, bienvenido a securitec"></textarea>
                    { input }
                    <input type="text" className="form-control default-box" placeholder="Default" />
                </div>
            </div>
        );
    }
}


export default Card;