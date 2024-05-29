import './App.css'
import React from 'react'

import AppHeader from '../AppHeader'

const App: React.FC = () => {

  return (
    <div className='home'>
      <AppHeader />

      <div className='home-content'>
        <h1>Personality Test Application</h1>
        <p>
          This is a simple personality test application that allows users to take a personality test and see their results.
        </p>
      </div>

    </div>
  )
}

export default App
