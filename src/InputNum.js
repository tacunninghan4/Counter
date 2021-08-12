import React, { Component } from 'react'

export default class InputNum extends Component {
    state = {
        count: ''
    }
    handleChange=(e)=>{
        this.setState({
            count: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.inputNum(this.state.count)
        this.setState({
            count: ''
        })
    }
    render() {
        return (
            <form action="" class='container' onSubmit={this.handleSubmit} id='myForm'>
                <input type="text" onChange={this.handleChange} value={this.state.count} />
                <button>Input</button>
            </form>
        )
    }
}
