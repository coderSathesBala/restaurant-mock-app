import React,{Component} from 'react';
import Intro from './components/Intro.js'
import OurMission from './components/OurMission.js'
<link rel="preconnect" href="https://fonts.gstatic.com"
href="https://fonts.googleapis.com/css2?family=Arvo:ital@1&display=swap" rel="stylesheet"></link>

class App extends Component {
  render () {
    return (
      <div>
        <Intro />
        <OurMission />
      </div>
    )
  }
}


export default App;
