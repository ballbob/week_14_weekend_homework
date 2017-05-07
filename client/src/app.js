import React from 'react';
import ReactDOM from 'react-dom';
import FaceContainer from './containers/FaceContainer'

window.onload = function(){
  ReactDOM.render(
    <FaceContainer/>,
    document.getElementById('app')
  );
}
