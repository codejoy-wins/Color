import React, { Component } from 'react'

export class Form extends Component {

    constructor(props){
        super(props);

        this.initialState = {
            color: '',
            speed: '',
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
        {/* Speed: <input type="text" name="speed" onChange={this.tracker} value={this.state.speed} ></input> */}
        {/* <button onClick={this.onSubmit}>Obey</button> */}

      </form>
    )
  }
}

export default Form
