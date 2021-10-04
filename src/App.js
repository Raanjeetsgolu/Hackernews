import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Displayresult from './Components/Displayresult'
import Home from './Components/Home'


const App = () => {
  const [id, setid] = useState()
  const idhandler=(e)=>{
    setid(e)
  }
  return (
    
    <Router>
    <div className="App">
    
      <Switch>
        <Route path='/details'>
      <Displayresult objetval={id}/>
      </Route>

        <Route path="/">
          <Home idhandler={idhandler} />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App
