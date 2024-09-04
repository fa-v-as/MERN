import React, { Component } from 'react'

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.addCount=this.addCount.bind(this)
    }
   
    addCount(){
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <h1><u>Counter</u></h1>
        <button onClick={this.addCount}>ADD</button>
        <h2>Count : {this.state.count}</h2>
      </div>
    )
  }
}

export default Home