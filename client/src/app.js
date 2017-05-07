import React from 'react';
import ReactDOM from 'react-dom';
import FaceContainer from './Containers/FaceContainer'

window.onload = function(){
  ReactDOM.render(
    <FaceContainer/>,
    document.getElementById('app')
  );
}
