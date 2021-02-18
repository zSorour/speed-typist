import React from 'react'
import NavigationBar from './components/Navigation/NavigationBar/NavigationBar'
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer'
import { useState } from 'react'
import { Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Play from './containers/Play/Play'

const App = () => {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  return (
    <div>
      <NavigationBar clicked={() => setSideDrawerOpen(!sideDrawerOpen)} />
      <SideDrawer open={sideDrawerOpen} closed={() => { console.log("CLOSE"); return setSideDrawerOpen(!sideDrawerOpen) }} />
      <Route path="/" exact component={Landing} />
      <Route path="/play" exact component={Play} />
    </div>
  )
}

export default App
