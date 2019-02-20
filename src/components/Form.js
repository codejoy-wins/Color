import React, { Component } from 'react'

export class Form extends Component {

    constructor(props){
        super(props);

        this.initialState = {
            color: '',
        }

        this.state = this.initialState;
    }
    onSubmit = e=>{
        e.preventDefault();
        this.props.handleSubmit(this.state.color);
        this.setState(this.initialState);
    }

    // tracker

    tracker = e=>{

        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        Color: <input type="text" name="color" onChange={this.tracker} value={this.state.color} ></input>
      </form>
    )
  }
}

export default Form
