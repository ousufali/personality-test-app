import './App.css'
import React from 'react'

import AppHeader from '../AppHeader'
import QuestionList from '../QuestionList'
import TestSection from '../TestSection'

const App: React.FC = () => {
  const questions = [
    {
      text: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
      isAnswered: true
    },
    {
      text: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
      isAnswered: false
    },
    {
      text: "You are taking part in a guided tour of a museum. You:",
      isAnswered: true
    },
    {
      text: "During dinner parties at your home, you have a hard time with people who:",
      isAnswered: false
    },
    {
      text: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
      isAnswered: false
    },
    {
      text: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
      isAnswered: false
    },
    {
      text: "You are taking part in a guided tour of a museum. You:",
      isAnswered: true
    },
    {
      text: "During dinner parties at your home, you have a hard time with people who:",
      isAnswered: false
    },
    {
      text: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
      isAnswered: false
    }
  ]

  return (
    <div id='App'>

      <div id='AppHeader'>
        <AppHeader />
      </div>
      <div id='QuestionList'>

        <QuestionList questions={questions} headingName='Questions' />
      </div>
      <div id='TestSection'>
        <TestSection />
      </div>



    </div>
  )
}

export default App
