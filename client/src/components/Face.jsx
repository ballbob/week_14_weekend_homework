import React from 'react'

class Face extends React.Component{
  constructor(props){
    super(props)
    this.inPlay = true
  }

  notInPlay(){
    this.inPlay = false
  }

  render(){
    return(
      <div id="face">
        <img src={this.props.img} width="200"/>
        {this.props.name}
      </div>
    )
  }
}

export default Face