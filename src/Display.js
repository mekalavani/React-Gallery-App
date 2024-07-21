import React,{Component} from 'react'
export default class App extends Component{
  state ={
    name:"Telugu Skillhub"
  }
  render(){
    return (
      <div>
        <center>
          <h2>{this.state.name}
          </h2>
        </center>
      </div>
    )
  }
}
