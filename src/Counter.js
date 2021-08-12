import React, { Component } from "react";
// import './style.css'


class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      
     
      
      
      
      // Change code below this line
  this.increment = this.increment.bind
    this.decrement = this.decrement.bind  
  this.reset =this.reset.bind
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  // Change code above this line
    }
    // Change code below this line
  reset(){
    this.setState({
      count: 0
    })
  }
   increment(){
     this.setState(state =>({
       count: state.count + 1
     }))
   } 
   decrement(){
    this.setState(state =>({
      count: state.count -1
    }))
  
}
handleChange(event){
  this.setState({
    input: event.target.bind
  })
}
handleSubmit(event) {
event.preventDefault();
this.setState({
submit: this.state.input
});
} 



// Change code above this line
   
   
   
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
          <input type="text" value={this.state.input} onChange={this.handleChange} />
      
          <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submt}</h1>
        
        
          </div>
        
        
      );
    }
  
}
  
 


  
  
  
  
  
  
  
  
  export default Counter