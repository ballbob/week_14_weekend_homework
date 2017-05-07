import React from 'react'
import QuestionContainer from './QuestionContainer'
import Face from '../components/Face'

class FaceContainer extends React.Component{
  render(){
    return(
      <div id="face-container">
        <div id="faces">
          <Face/>
        </div>

        <div id="questions">
          <QuestionContainer/>
        </div>
      </div>
    )
  }
}

export default FaceContainer