import React from 'react'

class QuestionContainer extends React.Component{
  
  handleChange(){
   let attribute = document.querySelector('#attribute')
   let option = document.querySelector('#option')

   if(this.state.)
  }

  render(){

    return(
      <div id="question-container" onClick={this.handleChange}>
        <select id="attribute">
          <option>Hair</option>
          <option>Eyes</option>
          <option>Glasses</option>
        </select>

        <select id="option">
        </select>
      </div>
    )
  }
}

export default QuestionContainer