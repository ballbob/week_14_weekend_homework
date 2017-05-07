import React from 'react'
import QuestionContainer from './QuestionContainer'
import Face from '../components/Face'

class FaceContainer extends React.Component{
  render(){
    return(
      <div id="face-container">
        <div id="faces">
          <Face name="Alice" img="alice.png"/>
          <Face name="Bob" img="bob.png"/>
          <Face name="Colin" img="colin.png"/>
          <Face name="Ewen" img="ewen.png"/>
          <Face name="Josef" img="josef.png"/>
          <Face name="Simon" img="simon.png"/>
          <Face name="Suzanne" img="suzanne.png"/>
        </div>

        <div id="questions">
          <QuestionContainer/>
        </div>
      </div>
    )
  }
}

export default FaceContainer